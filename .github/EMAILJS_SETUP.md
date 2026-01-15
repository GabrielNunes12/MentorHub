# EmailJS Setup Guide

This guide will help you set up email functionality for your mentorship portfolio contact form using EmailJS.

## What is EmailJS?

EmailJS allows you to send emails directly from your frontend application without needing a backend server. It's free for up to 200 emails per month.

## Step 1: Create a Free EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended for beginners)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Other SMTP**

### For Gmail:
1. Select "Gmail"
2. Click "Connect Account"
3. Sign in with your Gmail account
4. Allow EmailJS to access your account
5. Copy the **Service ID** (looks like `service_xxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click "Create New Template"
3. Set up your template with the following:

### Template Variables

Use these variables in your template (they match the Contact form fields):

```
{{to_email}}     - Recipient email (your email)
{{from_name}}    - Visitor's name
{{from_email}}   - Visitor's email
{{subject}}      - Message subject
{{message}}      - Message content
{{phone}}        - Visitor's phone (optional)
```

### Example Template

**Subject:** New Mentorship Inquiry from {{from_name}}

**Body:**
```
Hello,

You have received a new message from your mentorship portfolio contact form.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This is an automated message from your MentorHub website.
```

4. Save the template
5. Copy the **Template ID** (looks like `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account Settings** in EmailJS
2. Look for "Public Key"
3. Copy your **Public Key** (looks like `xxxxxxxxxxxxx`)

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_EMAIL=your-email@gmail.com
```

Replace the values with your actual credentials.

## Step 6: Test Your Setup

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact page
3. Fill out the contact form and submit it
4. Check your email (and spam folder) for the test message

## Troubleshooting

### Email not being sent
- Verify all environment variables are correctly set
- Check that the Service ID, Template ID, and Public Key are correct
- Look at the browser console for error messages

### Emails going to spam
- Add yourself to your Gmail contacts
- Mark the email as "Not spam" to train the filter
- Check your email service's spam settings

### Template variables not working
- Ensure variable names in your template match exactly: `{{variable_name}}`
- Use the preview feature in EmailJS to test template rendering

### Rate limiting
- Free tier: 200 emails per month
- Upgrade to a paid plan if you need more

## Production Considerations

### Using in Production
- Never commit `.env.local` to version control
- Use environment variables in your hosting platform
- Consider upgrading to a paid EmailJS plan for higher limits

### Setting up Email Forwarding
In your template, you can forward messages to multiple addresses by modifying the template to send a copy to the visitor:

1. Create a second template for sending a confirmation to the visitor
2. Call both templates in the contact form submission

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS API Reference](https://www.emailjs.com/docs/sdk/version/)
- [Gmail Setup Guide](https://www.emailjs.com/docs/user-guide/gmail/)

## Alternative Email Services

If you prefer not to use EmailJS, here are alternatives:

- **SendGrid**: More advanced, better for high volume
- **Mailgun**: Developer-friendly with good documentation
- **Formspree**: No-code form handling
- **Backend Solution**: Build your own Node.js/Express API

Need help? Check the browser console (F12) for detailed error messages when testing the contact form.
