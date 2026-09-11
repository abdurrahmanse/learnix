// @learnix/ui — Shared UI component library for the Learnix monorepo
"use client";

// Utilities
export { cn } from "./utils";

// shadcn/ui components
export { Avatar, AvatarFallback, AvatarImage } from "./components/avatar";
export { Badge, badgeVariants } from "./components/badge";
export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/breadcrumb";
export { Button, buttonVariants } from "./components/button";
export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/card";
export { Container } from "./components/container";
export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./components/dropdown-menu";
export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "./components/form";
export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "./components/input-otp";
export { Input } from "./components/input";
export { Label } from "./components/label";
export { MediaUploader } from "./components/media-uploader";
export { PasswordInput } from "./components/password-input";
export { ScrollArea, ScrollBar } from "./components/scroll-area";
export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./components/select";
export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "./components/sheet";
export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/table";
export { Textarea } from "./components/textarea";
export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/tooltip";

// Theme
export { ThemeProvider } from "./theme-provider";
export { ThemeToggle } from "./ThemeToggle";

// Custom UI Components
export { Link, linkVariants } from "./components/link";
export { Heading, Text, headingVariants, textVariants } from "./components/typography";
export { Section, Grid } from "./components/layout";
export {
  Modal,
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./components/dialog";

