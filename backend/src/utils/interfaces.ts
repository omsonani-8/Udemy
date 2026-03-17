
export interface UserAttributes {
  id?: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  profilePicture?: string;
  role_id: number;
}

export interface RoleAttributes {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface PermissionAttributes {
  id: number;
  name: string;
}

export interface RolePermissionAttributes {
  role_id: number;
  permission_id: number;
}

export interface CourseAttributes {
  id: number;
  title: string;
  description: string;
  price: number;
  instructor_id: number;
  category_id: number;
  approved: boolean;
  approver_id?: number;
  approvedAt?: Date;
  thumbnail?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LectureAttributes {
  id: number;
  course_id: number;
  title: string;
  type: "video" | "text" ;
  content: string;
  sequence: number;
  duration?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface EnrollmentAttributes {
  user_id: number;
  course_id: number;
  enrolledAt: Date;
  progress?: number;
}

export interface CategoryAttributes {
  id: number;
  name: string;
  description?: string;
}

export interface CartItemAttributes {
  user_id: number;
  course_id: number;
  createdAt: Date;
}

export interface ReviewAttributes {
  id: number;
  user_id: number;
  course_id: number;
  rating: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PaymentAttributes {
  id: number;
  user_id: number;
  course_id: number;
  amount: number;
  transaction_id: string;
  status: "pending" | "completed" | "failed";
  createdAt: Date;
}

export interface CertificateAttributes {
  id: number;
  user_id: number;
  course_id: number;
  issuedAt: Date;
}

export interface LectureProgressAttributes {
  id: number;
  user_id: number;
  lecture_id: number;
  completed: boolean;
  completedAt?: Date;
}

export interface User_Login {
  email: string;
  password: string;
}