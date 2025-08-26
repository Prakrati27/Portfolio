# Portfolio Website API Contracts

## Overview
This document defines the API contracts between the frontend and backend for the Product Manager Portfolio website. The frontend currently uses mock data that needs to be replaced with real backend integration.

## Current Mock Data Analysis

### Frontend Mock Usage (from `/app/frontend/src/mock.js`):
- **Contact Form Submissions**: Currently shows success toast without storing data
- **Portfolio Data**: Static data for personal info, skills, experience, projects
- **No authentication**: Frontend-only implementation

## API Endpoints to Implement

### 1. Contact Form API
**Endpoint**: `POST /api/contact`
**Purpose**: Store contact form submissions and send email notifications

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "message": "string (required)"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Thank you for reaching out. I'll get back to you soon.",
  "id": "contact_submission_id"
}
```

**Error Response**:
```json
{
  "success": false,
  "error": "Error message",
  "details": "Additional error details"
}
```

### 2. Portfolio Data API
**Endpoint**: `GET /api/portfolio`
**Purpose**: Retrieve portfolio content (for future CMS functionality)

**Response**:
```json
{
  "personalInfo": {
    "name": "string",
    "title": "string",
    "email": "string",
    "phone": "string",
    "location": "string",
    "tagline": "string",
    "subtitle": "string"
  },
  "about": {
    "intro": "string",
    "experience": "string", 
    "philosophy": "string"
  },
  "skills": {
    "productManagement": ["array of strings"],
    "customerCentric": ["array of strings"],
    "technicalData": ["array of strings"]
  },
  "experience": {
    "company": "string",
    "role": "string",
    "duration": "string",
    "impact": {
      "conversionIncrease": "string",
      "retentionIncrease": "string",
      "productivityGain": "string"
    },
    "achievements": ["array of strings"],
    "collaboration": ["array of strings"]
  },
  "projects": [
    {
      "id": "number",
      "title": "string",
      "description": "string",
      "longDescription": "string",
      "technologies": ["array of strings"],
      "impact": "string",
      "impactType": "string (color indicator)"
    }
  ]
}
```

### 3. Contact Submissions API (Admin)
**Endpoint**: `GET /api/admin/contacts`
**Purpose**: Retrieve all contact form submissions (future admin panel)

**Response**:
```json
{
  "contacts": [
    {
      "id": "string",
      "name": "string",
      "email": "string", 
      "message": "string",
      "submittedAt": "ISO date string",
      "status": "new|read|replied"
    }
  ],
  "total": "number"
}
```

## MongoDB Schema Design

### 1. Contact Submissions Collection (`contact_submissions`)
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, validated),
  message: String (required),
  submittedAt: Date (default: now),
  status: String (enum: ['new', 'read', 'replied'], default: 'new'),
  ipAddress: String (optional),
  userAgent: String (optional)
}
```

### 2. Portfolio Data Collection (`portfolio_data`)
```javascript
{
  _id: ObjectId,
  version: String (for versioning),
  personalInfo: {
    name: String,
    title: String,
    email: String,
    phone: String,
    location: String,
    tagline: String,
    subtitle: String
  },
  about: {
    intro: String,
    experience: String,
    philosophy: String
  },
  skills: {
    productManagement: [String],
    customerCentric: [String],
    technicalData: [String]
  },
  experience: {
    company: String,
    role: String,
    duration: String,
    impact: {
      conversionIncrease: String,
      retentionIncrease: String,
      productivityGain: String
    },
    achievements: [String],
    collaboration: [String]
  },
  projects: [{
    id: Number,
    title: String,
    description: String,
    longDescription: String,
    technologies: [String],
    impact: String,
    impactType: String
  }],
  updatedAt: Date (default: now),
  isActive: Boolean (default: true)
}
```

## Frontend Integration Plan

### 1. Replace Mock Contact Form
**File**: `/app/frontend/src/components/Portfolio.jsx`
**Changes**:
- Replace `toast()` mock in `handleSubmit` function
- Add real API call to `POST /api/contact`
- Add proper error handling
- Add loading states during submission

**Before**:
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  // Mock form submission
  toast({
    title: "Message sent successfully!",
    description: "Thank you for reaching out. I'll get back to you soon.",
  });
  setFormData({ name: '', email: '', message: '' });
};
```

**After**:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await axios.post(`${API}/contact`, formData);
    
    if (response.data.success) {
      toast({
        title: "Message sent successfully!",
        description: response.data.message,
      });
      setFormData({ name: '', email: '', message: '' });
    }
  } catch (error) {
    toast({
      title: "Error sending message",
      description: "Please try again later or contact directly.",
      variant: "destructive"
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

### 2. Dynamic Portfolio Data Loading
**Purpose**: Replace static mock data with API calls
**Implementation**: Add useEffect to fetch portfolio data on component mount
**Fallback**: Keep current mock data as fallback if API fails

### 3. Environment Variables
**Backend**: No new environment variables needed (using existing MONGO_URL)
**Frontend**: Using existing REACT_APP_BACKEND_URL

## Implementation Priority

### Phase 1: Core Backend (High Priority)
1. ✅ Contact form API endpoint
2. ✅ MongoDB contact submissions model
3. ✅ Basic error handling and validation

### Phase 2: Frontend Integration (High Priority)  
1. ✅ Replace mock contact form with real API calls
2. ✅ Add loading states and error handling
3. ✅ Test form submission flow

### Phase 3: Portfolio Data API (Medium Priority)
1. ⏳ Portfolio data MongoDB model with seed data
2. ⏳ GET /api/portfolio endpoint
3. ⏳ Frontend integration for dynamic content

### Phase 4: Admin Features (Low Priority)
1. ⏳ Admin API endpoints for viewing contact submissions
2. ⏳ Basic admin authentication
3. ⏳ Portfolio content management

## Testing Strategy

### Backend Testing
- Test contact form validation (required fields, email format)
- Test MongoDB connection and data persistence
- Test error handling for invalid requests
- Test API response formats

### Frontend Integration Testing  
- Test form submission with valid data
- Test form validation and error states
- Test loading states during API calls
- Test offline/network error scenarios
- Test toast notifications for success/error cases

## Success Criteria

### ✅ Backend Implementation Complete When:
- Contact form submissions are stored in MongoDB
- API returns proper success/error responses
- Input validation is working correctly
- Error handling is robust

### ✅ Frontend Integration Complete When:
- Contact form submits to real backend API
- Loading states are shown during submission
- Success/error toasts work correctly
- Form resets after successful submission
- Graceful error handling for network issues

## Notes

- **Security**: Add rate limiting for contact form to prevent spam
- **Validation**: Use both frontend and backend validation
- **Monitoring**: Log contact form submissions for analytics
- **Future**: Portfolio data API enables future CMS functionality
- **Email**: Consider adding email notification when contact form is submitted (optional enhancement)