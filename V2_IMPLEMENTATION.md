# V2_IMPLEMENTATION.md

## River City Plumbing Co. - Lead Flow Implementation Plan (Phase 2)

---

## Project Overview

Update the existing "Request a Quote" form on the River City Plumbing Co. landing page to handle new requirements and prepare for future automation implementation (email notifications, CRM/Google Sheet logging).

---

## Business Requirements mapping

The form will capture the following lead details:

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Phone Number | Tel | Yes |
| Service Needed | Select Dropdown | Yes |
| Zip Code | Text | Yes |
| Email Address | Email | No |
| Urgency Level | Select Dropdown | No |
| Describe the Problem | Textarea | No |
| Preferred Contact Method | Radio | No |

---

## Page Structure & Components Updates

### 1. Quote Request Section
**File**: `components/quote-form-section.tsx`

- **Heading**: Change from "Request a Free Quote" down to "Request a Quote".
- **Fields Modification**:
  - Remove validation requirements (`required` properties) from Email, Urgency, and Contact Method.
  - Visually label optional fields with `(optional)`.
- **Form Submission State**:
  - Enhance the success state text to gracefully instruct users to call directly for urgent issues.
  - Target text: "Thanks — we’ve received your request and will reach out soon. If your plumbing issue is urgent, please call us directly at (251) 555-0148."
- **Reassurance Copy**:
  - Insert text snippet directly near the submit button: "We'll review your request and reach out as soon as possible."
- **Submit Button**:
  - Update button label to "Request a Quote".

### 2. Form Submission Handling (Future Proofing)
- Isolate the form submission dummy event inside `handleSubmit`.
- Add inline documentation outlining the exact requirements and location for the downstream handlers such as data fetching, API integration, and notification scripts.

---

## Success Criteria

1. Visually and fundamentally match Phase 2 requirements without altering core CSS templates unnecessarily.
2. The form properly requires only Name, Phone, Service, Zip.
3. The "Thanks" state acts natively inside the main page tree.
4. Next-step hooks and stubs in-place for upcoming backend work.
