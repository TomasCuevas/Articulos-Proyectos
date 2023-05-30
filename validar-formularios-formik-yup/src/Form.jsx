import { useFormik } from "formik";
import * as Yup from "yup";

//* styles *//
import "./form.scss";

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      status: "pending",
      labels: [],
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(20, "El título puede tener como máximo 20 carácteres.")
        .required("El título es requerido."),
      description: Yup.string().max(
        300,
        "La descripción puede tener como máximo 300 carácteres."
      ),
      status: Yup.string()
        .oneOf(["pending", "in-progress", "completed"])
        .required(),
      labels: Yup.array().of(Yup.string()),
    }),
    validateOnChange: true,
    onSubmit: (formValues) => {
      alert(JSON.stringify(formValues, null, 4));
    },
  });

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <form onSubmit={formik.handleSubmit} className="form">
        <section className="form__section form__section-col">
          <label>
            <input
              type="text"
              name="title"
              placeholder="Título"
              value={formik.values.title}
              onChange={formik.handleChange}
              className="w-full text-black"
              style={{ border: formik.errors.title ? "2px solid red" : "" }}
            />
            <span className="error__message">{formik.errors.title}</span>
          </label>
          <label>
            <input
              type="text"
              name="description"
              placeholder="Descripción"
              value={formik.values.description}
              onChange={formik.handleChange}
              className="w-full text-black"
            />
            <span className="error__message">{formik.errors.description}</span>
          </label>
        </section>
        <section className="form__section">
          <label>
            <input
              type="radio"
              value="pending"
              name="status"
              onChange={formik.handleChange}
              checked={formik.values.status === "pending"}
            />
            <span>Pendiente</span>
          </label>
          <label>
            <input
              type="radio"
              value="in-progress"
              name="status"
              onChange={formik.handleChange}
              checked={formik.values.status === "in-progress"}
            />
            <span>En progreso</span>
          </label>
          <label>
            <input
              type="radio"
              value="completed"
              name="status"
              onChange={formik.handleChange}
              checked={formik.values.status === "completed"}
            />
            <span>Completada</span>
          </label>
        </section>
        <section className="form__section form__section-col">
          <label className="checkbox">
            <input
              type="checkbox"
              name="labels"
              value="green"
              onChange={formik.handleChange}
            />
            <div className="w-full h-4 bg-green-500" />
          </label>
          <label className="checkbox">
            <input
              type="checkbox"
              name="labels"
              value="blue"
              onChange={formik.handleChange}
            />
            <div className="w-full h-4 bg-blue-500" />
          </label>
          <label className="checkbox">
            <input
              type="checkbox"
              name="labels"
              value="red"
              onChange={formik.handleChange}
            />
            <div className="w-full h-4 bg-red-500" />
          </label>
          <label className="checkbox">
            <input
              type="checkbox"
              name="labels"
              value="yellow"
              onChange={formik.handleChange}
            />
            <div className="w-full h-4 bg-yellow-500" />
          </label>
          <label className="checkbox">
            <input
              type="checkbox"
              name="labels"
              value="violet"
              onChange={formik.handleChange}
            />
            <div className="w-full h-4 bg-violet-500" />
          </label>
        </section>
        <section>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-slate-800 rounded-lg hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-800/50 disabled:text-white/20"
            disabled={Object.keys(formik.errors).length > 0}
          >
            Guardar
          </button>
        </section>
      </form>
    </main>
  );
};
