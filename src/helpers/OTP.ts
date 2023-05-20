export const generateOTP = (): number => Math.floor(1000 + Math.random() * 9000);

export const hasOTPExpired = (otpUpdatedAt: Date): boolean => {
  const currentTime = new Date();
  const timeDifferenceInMinutes = Math.floor(
    (currentTime.getTime() - otpUpdatedAt.getTime()) / (1000 * 60)
  );
  return timeDifferenceInMinutes > 10;
}