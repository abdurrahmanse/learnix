from datetime import datetime

def get_otp_html_template(otp_code: str, user_name: str = "User", purpose: str = "registration") -> str:
    year = datetime.now().year
    
    if purpose == "registration":
        heading = "Verify your email address"
        message = "Thank you for registering. To complete your verification, please use the One-Time Password (OTP) below:"
    else:
        heading = "Reset Your Password"
        message = "We received a request to reset your password. Please use the One-Time Password (OTP) below to proceed:"

    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="background-color: #f6f9fc; font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif; padding: 40px 0; margin: 0;">
        <div style="background-color: #ffffff; border: 1px solid #eee; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); margin: 0 auto; max-width: 560px; overflow: hidden;">
            <div style="background-color: #2563eb; padding: 24px; text-align: center;">
                <h1 style="color: #ffffff; font-size: 24px; font-weight: 700; margin: 0; letter-spacing: 1px;">Learnix</h1>
            </div>
            <div style="padding: 32px 40px;">
                <h2 style="color: #333333; font-size: 20px; font-weight: 600; margin-bottom: 20px;">{heading}</h2>
                <p style="color: #555555; font-size: 16px; line-height: 24px; margin: 12px 0;">Hello {user_name},</p>
                <p style="color: #555555; font-size: 16px; line-height: 24px; margin: 12px 0;">
                    {message}
                </p>
                <div style="background-color: #f3f4f6; border: 1px dashed #cbd5e1; border-radius: 6px; margin: 24px 0; padding: 20px; text-align: center;">
                    <p style="color: #0f172a; font-size: 32px; font-weight: 700; letter-spacing: 8px; margin: 0;">{otp_code}</p>
                </div>
                <p style="color: #555555; font-size: 16px; line-height: 24px; margin: 12px 0;">
                    <strong>Note:</strong> This code will expire in 15 minutes.
                </p>
                <hr style="border: none; border-top: 1px solid #eaeaea; margin: 24px 0;" />
                <p style="color: #888888; font-size: 14px; line-height: 20px; margin: 0;">
                    If you didn't request this email, there's nothing to worry about — you can safely ignore it. 
                    Never share your OTP with anyone.
                </p>
            </div>
            <div style="background-color: #fafafa; border-top: 1px solid #eaeaea; padding: 20px; text-align: center;">
                <p style="color: #a1a1aa; font-size: 12px; margin: 0;">
                    © {year} Learnix. All rights reserved.
                </p>
            </div>
        </div>
    </body>
    </html>
    """
