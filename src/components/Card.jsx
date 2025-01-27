export default function Card({ objDetails }) {
  return (
    <div>
      <div className="flex flex-wrap w-<90%> h-screen p-10 bg-black justify-center gap-10">
        {objDetails.map((objDetails) => (
          <div className="h-61 w-50 p-1 m-2 bg-gradient-to-r from-pink-500 via-green-400 to-yellow-500">
            <div className="p-3 bg-black grid m-<2px>">
              <div className="place-self-center pl-2 pt-1">
                <div className="h-38 w-38">
                  <img className="h-38 w-38" src={objDetails.image} alt="img" />
                </div>
                <div className="text-xl bg-black text-slate-500 w-41">
                  <p className=" place-self-center">Picture: {objDetails.id}</p>
                  <p className=" place-self-center">{objDetails.name}</p>
                  <div />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
