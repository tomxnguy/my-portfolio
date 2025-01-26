import mylogo from "../assets/mylogo.png";

export default function Header() {
  return (
    <div>
      <div className="flex w-full h-24 items-center justify-between bg-blue-200">
        <div className="items-center">
          <img src={mylogo} alt="mylogo" />
        </div>
        <div>
          <span className="material-symbols-outlined mx-2">menu</span>
        </div>
      </div>
    </div>
  );
}
