import LoaderImg from "../../assets/loading.svg";



const Loader = () => {

  return (
    <div className="w-screen h-screen flex justify-center items-center" >
      <div className="w-[100px] h-[100px]">
        <img
          src={LoaderImg}
        />
      </div>
    </div>
  )
}

export default Loader;