import { string, object, number } from "yup";
import { loggedInUser } from "./data";

export const formSchema = object({
  starRating: number().min(1, "Please select a star rating").required(),
  writtenReview: string()
    .min(15, "Written review must be at least 15 characters")
    .required("Please enter your written review"),
  headline: string()
    .min(4, "Headline must be at least 4 characters")
    .required("Please enter your headline"),
});

export const formInitialValues = {
  user: loggedInUser.name,
  starRating: 0,
  writtenReview: "",
  headline: "",
};
