# Schedule Now Feature Implementation Plan

## Overview
This plan outlines the steps to replace the current Calendly integration with a custom "Schedule Now" flow. The new flow will involve a calendar for date selection, a confirmation step, and a redirection to Stripe for payment.

## Goals
-   Replace external Calendly links with an in-app booking experience.
-   Implement a Calendar component for date/time selection.
-   Integrate Stripe payment links for service checkout.

## User Requirements
-   **Trigger**: Clicking "Schedule Now" on a service card.
-   **Flow**:
    1.  Open Calendar Modal.
    2.  Select Date/Time.
    3.  Confirm Selection.
    4.  Redirect to Stripe Payment.
-   **Specific Services**:
    -   Career Coaching
    -   Resume & LinkedIn Review
    -   Interview Preparation
-   **Notifications**:
    -   Notify mentor via Google Calendar when a booking is confirmed.

## Architecture & Components

### 1. Booking Modal (`src/components/BookingModal.tsx`)
A new modal component that handles the booking flow.
-   **State**: `isOpen`, `step` (calendar | confirmation), `selectedDate`, `selectedTime`.
-   **Props**: `serviceName`, `onClose`, `onConfirm`.
-   **UI**:
    -   **Step 1: Calendar**: Display a calendar (using `react-day-picker` or similar) to select a date.
    -   **Step 2: Time Selection**: Display available time slots for the selected date.
    -   **Step 3: Confirmation**: Show service details, selected date/time, and price. "Confirm & Pay" button.

### 2. Booking Hook (`src/hooks/useBooking.ts`)
A custom hook to manage the booking logic and Stripe redirection.
-   **Functions**:
    -   `openBooking(serviceName)`: Opens the modal.
    -   `confirmBooking(serviceName, date, time)`: 
        1.  Triggers Google Calendar notification (via API/Serverless Function).
        2.  Redirects to the corresponding Stripe link.
-   **Configuration**:
    -   Map service names to Stripe URLs.

### 3. Google Calendar Integration (`api/calendar-notification`)
Since we need to securely handle Google API credentials, we should use a Vercel Serverless Function.
-   **Endpoint**: `/api/notify-calendar`
-   **Method**: POST
-   **Body**: `{ serviceName, date, time, userEmail (optional) }`
-   **Logic**:
    -   Authenticate with Google Calendar API using a Service Account.
    -   Create an event in the mentor's calendar.
    -   (Optional) Send an email invite to the user.

### 4. Service Page Update (`src/pages/Services.tsx`)
-   Replace `useCalendly` with `useBooking`.
-   Integrate `BookingModal`.

## Implementation Steps

### Phase 1: Setup & Dependencies
-   [ ] Install a calendar library (e.g., `react-day-picker` and `date-fns`).
    ```bash
    npm install react-day-picker date-fns
    ```
-   [ ] Install Google APIs client for the backend function.
    ```bash
    npm install googleapis
    ```
-   [ ] Create the `.github/plans` directory (Done).

### Phase 2: Component Development
-   [ ] Create `src/components/BookingModal.tsx`.
    -   Implement Modal UI structure.
    -   Integrate Calendar component.
    -   Add time slot selection (mocked or logic-based).
    -   Add confirmation view.

### Phase 3: Logic & Integration
-   [ ] Create `api/notify-calendar.ts` (Vercel Function).
    -   Setup Google Auth.
    -   Implement event creation logic.
-   [ ] Create `src/hooks/useBooking.ts`.
    -   Define the `stripeUrls` object (Needs user input for specific URLs).
    -   Implement `confirmBooking` to call the API and then redirect.
-   [ ] Update `src/pages/Services.tsx`.
    -   Import `useBooking` and `BookingModal`.
    -   Connect "Schedule Now" buttons.

### Phase 4: Verification
-   [ ] Test the flow for each service.
-   [ ] Verify Stripe redirection.
-   [ ] specific links check:
    -   Career Coaching -> https://buy.stripe.com/aFa7sN65tdW28nX0Fx87K02
    -   Resume & LinkedIn Review -> https://buy.stripe.com/3cI6oJbpN6tAdIh87Z87K00
    -   Interview Prep -> https://buy.stripe.com/cNicN7bpNcRY9s1ewn87K01
    -   Salary Negotiation -> https://buy.stripe.com/fZubJ365t7xEeMl87Z87K05
    -   Leadership Mentorship -> https://buy.stripe.com/00w6oJalJ2dk1Zzbkb87K04
    -   Monthly Retainer -> https://buy.stripe.com/7sYdRbbpN9FM33Ddsj87K03

## Questions for User
-   **Stripe Links**: Please provide the specific Stripe payment links for:
    -   Career Coaching
    -   Resume & LinkedIn Review
    -   Interview Preparation
-   **Google Calendar Credentials**: To automate this, we need:
    -   A Google Cloud Service Account (JSON key).
    -   The Calendar ID (usually your email address).
    -   *Note*: I can guide you on how to set this up, or we can use a simpler method (e.g., "Add to Calendar" button) if you prefer not to set up a backend integration.
-   **Availability Logic**: Should I mock the available days/times for now (e.g., Mon-Fri, 9-5)?
