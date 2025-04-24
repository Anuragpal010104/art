// Utility to concatenate class names conditionally
// Usage: cn('foo', condition && 'bar', ...)
export function cn(...inputs: any[]): string {
  return inputs.filter(Boolean).join(' ');
}
