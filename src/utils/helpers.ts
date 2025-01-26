export class ValidateInput {
  static validateInput(input: string): boolean {
    return input.trim().length > 0;
  }
  static validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  static validatePassword(password: string): string {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }

    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }

    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }

    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number";
    }

    if (!/[!@#$%^&*]/.test(password)) {
      return "Password must contain at least one special character";
    }

    if (/[\s]/.test(password)) {
      return "Password must not contain any whitespace";
    }

    return "";
  }
}
