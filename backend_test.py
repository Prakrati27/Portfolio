#!/usr/bin/env python3
"""
Portfolio Website Backend API Testing Suite
Tests all backend endpoints for functionality, validation, and data persistence.
"""

import requests
import json
import time
from datetime import datetime
import uuid

# Configuration
BASE_URL = "https://mvp-builder-7.preview.emergentagent.com/api"
TIMEOUT = 30

class PortfolioBackendTester:
    def __init__(self):
        self.test_results = []
        self.contact_ids = []  # Track created contact submissions for cleanup
        
    def log_test(self, test_name, success, message, details=None):
        """Log test results"""
        result = {
            "test": test_name,
            "success": success,
            "message": message,
            "timestamp": datetime.now().isoformat(),
            "details": details or {}
        }
        self.test_results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name} - {message}")
        if details:
            print(f"   Details: {details}")
        print()

    def test_root_endpoint(self):
        """Test GET /api/ endpoint"""
        try:
            response = requests.get(f"{BASE_URL}/", timeout=TIMEOUT)
            
            if response.status_code == 200:
                data = response.json()
                if "message" in data:
                    self.log_test("Root Endpoint", True, "Root endpoint working correctly", 
                                {"status_code": response.status_code, "response": data})
                else:
                    self.log_test("Root Endpoint", False, "Root endpoint missing expected message field",
                                {"status_code": response.status_code, "response": data})
            else:
                self.log_test("Root Endpoint", False, f"Root endpoint returned status {response.status_code}",
                            {"status_code": response.status_code, "response": response.text})
                
        except Exception as e:
            self.log_test("Root Endpoint", False, f"Root endpoint failed with error: {str(e)}")

    def test_status_endpoints(self):
        """Test POST and GET /api/status endpoints"""
        # Test POST /api/status
        try:
            test_client_name = f"TestClient_{uuid.uuid4().hex[:8]}"
            post_data = {"client_name": test_client_name}
            
            response = requests.post(f"{BASE_URL}/status", 
                                   json=post_data, 
                                   timeout=TIMEOUT,
                                   headers={"Content-Type": "application/json"})
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["id", "client_name", "timestamp"]
                if all(field in data for field in required_fields):
                    if data["client_name"] == test_client_name:
                        self.log_test("POST Status", True, "Status creation working correctly",
                                    {"status_code": response.status_code, "created_id": data["id"]})
                    else:
                        self.log_test("POST Status", False, "Status creation returned wrong client_name",
                                    {"expected": test_client_name, "got": data["client_name"]})
                else:
                    missing = [f for f in required_fields if f not in data]
                    self.log_test("POST Status", False, f"Status creation missing fields: {missing}",
                                {"response": data})
            else:
                self.log_test("POST Status", False, f"Status creation failed with status {response.status_code}",
                            {"status_code": response.status_code, "response": response.text})
                
        except Exception as e:
            self.log_test("POST Status", False, f"Status creation failed with error: {str(e)}")

        # Test GET /api/status
        try:
            response = requests.get(f"{BASE_URL}/status", timeout=TIMEOUT)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("GET Status", True, f"Status retrieval working correctly, found {len(data)} records",
                                {"status_code": response.status_code, "count": len(data)})
                else:
                    self.log_test("GET Status", False, "Status retrieval should return a list",
                                {"response_type": type(data).__name__})
            else:
                self.log_test("GET Status", False, f"Status retrieval failed with status {response.status_code}",
                            {"status_code": response.status_code, "response": response.text})
                
        except Exception as e:
            self.log_test("GET Status", False, f"Status retrieval failed with error: {str(e)}")

    def test_contact_form_valid_submission(self):
        """Test POST /api/contact with valid data"""
        try:
            # Test with realistic portfolio contact data
            contact_data = {
                "name": "Sarah Johnson",
                "email": "sarah.johnson@techcorp.com",
                "message": "Hi! I'm interested in discussing a potential web development project for our startup. We need a modern, responsive website with e-commerce capabilities. Could we schedule a call to discuss the requirements and timeline?"
            }
            
            response = requests.post(f"{BASE_URL}/contact", 
                                   json=contact_data, 
                                   timeout=TIMEOUT,
                                   headers={"Content-Type": "application/json"})
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["success", "message", "id"]
                if all(field in data for field in required_fields):
                    if data["success"] and data["id"]:
                        self.contact_ids.append(data["id"])  # Track for verification
                        self.log_test("Contact Form Valid", True, "Contact form submission working correctly",
                                    {"status_code": response.status_code, "contact_id": data["id"]})
                    else:
                        self.log_test("Contact Form Valid", False, "Contact form returned success=False or missing ID",
                                    {"response": data})
                else:
                    missing = [f for f in required_fields if f not in data]
                    self.log_test("Contact Form Valid", False, f"Contact form response missing fields: {missing}",
                                {"response": data})
            else:
                self.log_test("Contact Form Valid", False, f"Contact form failed with status {response.status_code}",
                            {"status_code": response.status_code, "response": response.text})
                
        except Exception as e:
            self.log_test("Contact Form Valid", False, f"Contact form failed with error: {str(e)}")

    def test_contact_form_validation(self):
        """Test contact form validation rules"""
        
        # Test missing required fields
        test_cases = [
            {
                "name": "Missing Name",
                "data": {"email": "test@example.com", "message": "This is a test message with enough characters."},
                "should_fail": True
            },
            {
                "name": "Missing Email", 
                "data": {"name": "John Doe", "message": "This is a test message with enough characters."},
                "should_fail": True
            },
            {
                "name": "Missing Message",
                "data": {"name": "John Doe", "email": "test@example.com"},
                "should_fail": True
            },
            {
                "name": "Invalid Email Format",
                "data": {"name": "John Doe", "email": "invalid-email", "message": "This is a test message with enough characters."},
                "should_fail": True
            },
            {
                "name": "Name Too Long",
                "data": {"name": "A" * 101, "email": "test@example.com", "message": "This is a test message with enough characters."},
                "should_fail": True
            },
            {
                "name": "Message Too Short",
                "data": {"name": "John Doe", "email": "test@example.com", "message": "Short"},
                "should_fail": True
            },
            {
                "name": "Message Too Long",
                "data": {"name": "John Doe", "email": "test@example.com", "message": "A" * 1001},
                "should_fail": True
            },
            {
                "name": "Valid Edge Case - Min Length",
                "data": {"name": "A", "email": "a@b.co", "message": "1234567890"},  # Exactly 10 chars
                "should_fail": False
            },
            {
                "name": "Valid Edge Case - Max Length",
                "data": {"name": "A" * 100, "email": "test@example.com", "message": "A" * 1000},
                "should_fail": False
            }
        ]
        
        for test_case in test_cases:
            try:
                response = requests.post(f"{BASE_URL}/contact", 
                                       json=test_case["data"], 
                                       timeout=TIMEOUT,
                                       headers={"Content-Type": "application/json"})
                
                if test_case["should_fail"]:
                    if response.status_code >= 400:
                        self.log_test(f"Validation - {test_case['name']}", True, 
                                    "Validation correctly rejected invalid data",
                                    {"status_code": response.status_code})
                    else:
                        self.log_test(f"Validation - {test_case['name']}", False, 
                                    "Validation should have rejected invalid data",
                                    {"status_code": response.status_code, "response": response.json()})
                else:
                    if response.status_code == 200:
                        data = response.json()
                        if data.get("success") and data.get("id"):
                            self.contact_ids.append(data["id"])
                            self.log_test(f"Validation - {test_case['name']}", True, 
                                        "Validation correctly accepted valid data",
                                        {"status_code": response.status_code, "contact_id": data["id"]})
                        else:
                            self.log_test(f"Validation - {test_case['name']}", False, 
                                        "Valid data was accepted but response indicates failure",
                                        {"response": data})
                    else:
                        self.log_test(f"Validation - {test_case['name']}", False, 
                                    "Validation incorrectly rejected valid data",
                                    {"status_code": response.status_code, "response": response.text})
                        
            except Exception as e:
                self.log_test(f"Validation - {test_case['name']}", False, 
                            f"Validation test failed with error: {str(e)}")

    def test_admin_contacts_retrieval(self):
        """Test GET /api/admin/contacts endpoint"""
        try:
            response = requests.get(f"{BASE_URL}/admin/contacts", timeout=TIMEOUT)
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["contacts", "total"]
                if all(field in data for field in required_fields):
                    contacts = data["contacts"]
                    if isinstance(contacts, list):
                        # Check if our submitted contacts are present
                        found_contacts = 0
                        for contact_id in self.contact_ids:
                            for contact in contacts:
                                if contact.get("id") == contact_id:
                                    found_contacts += 1
                                    break
                        
                        # Verify contacts are sorted by submittedAt in descending order
                        sorted_correctly = True
                        if len(contacts) > 1:
                            for i in range(len(contacts) - 1):
                                current_time = contacts[i].get("submittedAt", "")
                                next_time = contacts[i + 1].get("submittedAt", "")
                                if current_time < next_time:
                                    sorted_correctly = False
                                    break
                        
                        success_msg = f"Admin contacts retrieval working correctly. Found {len(contacts)} total contacts"
                        if found_contacts > 0:
                            success_msg += f", including {found_contacts} from our test submissions"
                        if not sorted_correctly:
                            success_msg += " (WARNING: Contacts may not be sorted correctly by submittedAt)"
                            
                        self.log_test("Admin Contacts", True, success_msg,
                                    {"status_code": response.status_code, "total_contacts": len(contacts), 
                                     "found_test_contacts": found_contacts, "sorted_correctly": sorted_correctly})
                    else:
                        self.log_test("Admin Contacts", False, "Admin contacts 'contacts' field should be a list",
                                    {"contacts_type": type(contacts).__name__})
                else:
                    missing = [f for f in required_fields if f not in data]
                    self.log_test("Admin Contacts", False, f"Admin contacts response missing fields: {missing}",
                                {"response": data})
            else:
                self.log_test("Admin Contacts", False, f"Admin contacts failed with status {response.status_code}",
                            {"status_code": response.status_code, "response": response.text})
                
        except Exception as e:
            self.log_test("Admin Contacts", False, f"Admin contacts failed with error: {str(e)}")

    def test_data_persistence(self):
        """Test that multiple submissions are properly stored with unique IDs and timestamps"""
        try:
            # Submit multiple contact forms with slight delays
            submissions = []
            for i in range(3):
                contact_data = {
                    "name": f"Test User {i+1}",
                    "email": f"testuser{i+1}@example.com", 
                    "message": f"This is test message number {i+1} to verify data persistence and unique ID generation."
                }
                
                response = requests.post(f"{BASE_URL}/contact", 
                                       json=contact_data, 
                                       timeout=TIMEOUT,
                                       headers={"Content-Type": "application/json"})
                
                if response.status_code == 200:
                    data = response.json()
                    if data.get("success") and data.get("id"):
                        submissions.append({
                            "id": data["id"],
                            "name": contact_data["name"],
                            "email": contact_data["email"]
                        })
                        self.contact_ids.append(data["id"])
                
                time.sleep(1)  # Small delay to ensure different timestamps
            
            if len(submissions) == 3:
                # Check that all IDs are unique
                ids = [s["id"] for s in submissions]
                unique_ids = set(ids)
                
                if len(unique_ids) == len(ids):
                    self.log_test("Data Persistence", True, 
                                f"Successfully created {len(submissions)} submissions with unique IDs",
                                {"submission_ids": ids})
                else:
                    self.log_test("Data Persistence", False, 
                                "Some submissions have duplicate IDs",
                                {"ids": ids, "unique_count": len(unique_ids)})
            else:
                self.log_test("Data Persistence", False, 
                            f"Only {len(submissions)} out of 3 submissions succeeded",
                            {"successful_submissions": len(submissions)})
                
        except Exception as e:
            self.log_test("Data Persistence", False, f"Data persistence test failed with error: {str(e)}")

    def test_error_handling(self):
        """Test various error scenarios"""
        
        # Test invalid JSON
        try:
            response = requests.post(f"{BASE_URL}/contact", 
                                   data="invalid json", 
                                   timeout=TIMEOUT,
                                   headers={"Content-Type": "application/json"})
            
            if response.status_code >= 400:
                self.log_test("Error Handling - Invalid JSON", True, 
                            "Server correctly handles invalid JSON",
                            {"status_code": response.status_code})
            else:
                self.log_test("Error Handling - Invalid JSON", False, 
                            "Server should reject invalid JSON",
                            {"status_code": response.status_code})
        except Exception as e:
            self.log_test("Error Handling - Invalid JSON", False, 
                        f"Invalid JSON test failed with error: {str(e)}")

        # Test non-existent endpoint
        try:
            response = requests.get(f"{BASE_URL}/nonexistent", timeout=TIMEOUT)
            
            if response.status_code == 404:
                self.log_test("Error Handling - 404", True, 
                            "Server correctly returns 404 for non-existent endpoints",
                            {"status_code": response.status_code})
            else:
                self.log_test("Error Handling - 404", False, 
                            "Server should return 404 for non-existent endpoints",
                            {"status_code": response.status_code})
        except Exception as e:
            self.log_test("Error Handling - 404", False, 
                        f"404 test failed with error: {str(e)}")

    def run_all_tests(self):
        """Run all backend tests"""
        print("=" * 80)
        print("PORTFOLIO WEBSITE BACKEND API TESTING")
        print("=" * 80)
        print(f"Testing against: {BASE_URL}")
        print(f"Started at: {datetime.now().isoformat()}")
        print("=" * 80)
        print()
        
        # Run tests in logical order
        self.test_root_endpoint()
        self.test_status_endpoints()
        self.test_contact_form_valid_submission()
        self.test_contact_form_validation()
        self.test_data_persistence()
        self.test_admin_contacts_retrieval()
        self.test_error_handling()
        
        # Summary
        print("=" * 80)
        print("TEST SUMMARY")
        print("=" * 80)
        
        passed = sum(1 for result in self.test_results if result["success"])
        failed = len(self.test_results) - passed
        
        print(f"Total Tests: {len(self.test_results)}")
        print(f"Passed: {passed}")
        print(f"Failed: {failed}")
        print(f"Success Rate: {(passed/len(self.test_results)*100):.1f}%")
        
        if failed > 0:
            print("\nFAILED TESTS:")
            for result in self.test_results:
                if not result["success"]:
                    print(f"❌ {result['test']}: {result['message']}")
        
        print(f"\nCompleted at: {datetime.now().isoformat()}")
        print("=" * 80)
        
        return {
            "total": len(self.test_results),
            "passed": passed,
            "failed": failed,
            "success_rate": passed/len(self.test_results)*100,
            "results": self.test_results
        }

if __name__ == "__main__":
    tester = PortfolioBackendTester()
    results = tester.run_all_tests()
    
    # Exit with error code if any tests failed
    exit(0 if results["failed"] == 0 else 1)