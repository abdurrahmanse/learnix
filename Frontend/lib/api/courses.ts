import { api } from "../axios";
import { Course } from "@/types/course";
import { CourseFormValues } from "@/lib/validations/course";
export const courseService = {
  // Public
  listPublishedCourses: async (): Promise<Course[]> => {
    const response = await api.get("/courses/");
    return response.data;
  },
  
  getCourseDetails: async (idOrSlug: string): Promise<Course> => {
    const response = await api.get(`/courses/${idOrSlug}`);
    return response.data;
  },

  // Admin
  listAllCoursesAdmin: async (): Promise<Course[]> => {
    const response = await api.get("/courses/admin");
    return response.data;
  },

  createCourse: async (data: CourseFormValues): Promise<Course> => {
    const response = await api.post("/courses/", data);
    return response.data;
  },

  updateCourse: async (courseId: string, data: Partial<CourseFormValues>): Promise<Course> => {
    const response = await api.put(`/courses/${courseId}`, data);
    return response.data;
  },

  deleteCourse: async (courseId: string): Promise<void> => {
    await api.delete(`/courses/${courseId}`);
  },
};
