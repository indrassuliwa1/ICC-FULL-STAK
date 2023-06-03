import Navbar from "../components/Navbar";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

const AddData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nama: "",
      kelas: "",
      prodi: "",
    },
    mode: "onBlur",
  });

  const addSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:9000/create", data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: false,
      });
      console.log(data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen shadow-md">
        <form
          onSubmit={handleSubmit(addSubmit)}
          className="flex flex-col items-center justify-center w-[50vw] h-[80vh] shadow-md border-2 text-lg gap-4"
        >
          <h1 className="my-6">Add Data</h1>
          {/* Nama */}
          <div className="flex flex-col">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              id="nama"
              placeholder="masukan nama"
              className="p-4 bg-slate-100 rounded-md w-[40vw] border-2 border-slate-200"
              {...register("nama", { required: "nama harus diisi" })}
            />
            {errors.nama && (
              <span className="text-red-600">{errors.nama.message}</span>
            )}
          </div>

          {/* Kelas */}
          <div className="flex flex-col ">
            <label htmlFor="kelas">Kelas</label>
            <input
              type="text"
              id="kelas"
              placeholder="masukan kelas"
              className="p-4 bg-slate-100 rounded-md w-[40vw] border-2 border-slate-200"
              {...register("kelas", { required: "kelas harus diisi" })}
            />
            {errors.kelas && (
              <span className="text-red-600">{errors.kelas.message}</span>
            )}
          </div>

          {/* Prodi */}
          <div className="flex flex-col ">
            <label htmlFor="prodi">Prodi</label>
            <input
              type="text"
              id="prodi"
              placeholder="masukan prodi"
              className="p-4 bg-slate-100 rounded-md w-[40vw] border-2 border-slate-200"
              {...register("prodi", { required: "prodi harus diisi" })}
            />
            {errors.prodi && (
              <span className="text-red-600">{errors.prodi.message}</span>
            )}
          </div>
          <button className="w-[10vw] h-[5vh] mt-10 bg-blue-500 hover:bg-blue-400 text-white font-semibold">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddData;
