"use client";
import { useForm } from "react-hook-form";
import "./page.css";
import AxiosInstance from "@/helpers/AxiosInstance";
export type ContactFormProps = {
  name: string;
  email: string;
  mobileNumber: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm<ContactFormProps>();

  function SubmitContactForm(data: ContactFormProps) {
    AxiosInstance().post("/api/contact-form-submit", data);
    reset();
  }

  return (
    <>
      <div className="contact-form-container d-flex justify-content-center" id="contact-form">
        <div className="col-md-8">
          <h4 className="gradient text-center">Contact Me</h4>
          <form onSubmit={handleSubmit(SubmitContactForm)}>
            <div className="my-3">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                required
                {...register("name")}
              />
            </div>
            <div className="my-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                {...register("email")}
              />
            </div>
            <div className="my-3">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                required
                {...register("mobileNumber")}
              />
            </div>
            <div className="my-3">
              <label htmlFor="name">Write your Message</label>
              <textarea
                className="form-control"
                rows={4}
                id="name"
                required
                {...register("message")}
              />
            </div>
            <div className="mt-3 float-end">
              <button type="submit" className="btn btn-contact-submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
