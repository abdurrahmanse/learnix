import { InputOTP, InputOTPGroup, InputOTPSlot } from "@learnix/ui";

interface OTPInputGroupProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function OTPInputGroup({ value, onChange, disabled }: OTPInputGroupProps) {
  return (
    <InputOTP maxLength={6} value={value} onChange={onChange} disabled={disabled}>
      <InputOTPGroup>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <InputOTPSlot key={index} index={index} className="h-12 w-12 text-lg sm:h-14 sm:w-14 sm:text-xl" />
        ))}
      </InputOTPGroup>
    </InputOTP>
  );
}
