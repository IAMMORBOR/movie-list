import { CircularProgressbar,  buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import backgroundImage from "../assets/batman.jpg";
export default function MoviePage() {
    const percentage = 30;
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full flex justify-center items-center backdrop-brightness-[.1]">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full md:p-10">
            <div className="max-w-[400px] h-[30rem]">
              <img src={backgroundImage} alt="" className="h-full w-full" />
            </div>
            <div className="text-white">
              <h1 className="text-lg font-900">Movie Title</h1>
              <p className="text-sm font-600">Movie description</p>
              <h1 className="text-lg font-900">Overview</h1>
              <p className="text-normal">Movie overview detaila</p>
              <div className="flex items-center justify-center">
                <h1 className="text-lg font-900 mr-2">Genres:</h1>
                <p className="bg-[#0e0d0d] py-1 px-4 text-sm">
                  {" "}
                  Science Friction
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-900 mr-2">
                  Runtime:
                  <span className="text-normal">17h</span>
                </div>
                <div style={{ width: 80, height: 80, color:"red"}}>
                <CircularProgressbar value={percentage} text={`${percentage}%`}
                styles={buildStyles({
                    textColor: "white",
                    pathColor: "red",
                    trailColor: "white"
                  })} />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
