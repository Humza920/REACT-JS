import { useState , useCallback , useEffect ,useRef } from "react";

const App = () => {
  // Generic type annotation use hua hai ts ka
  const [pass , setpass] =  useState<string>('')
  const [length , setlength] = useState<string>("8")
  const [character , setcharacter] = useState<boolean>(false)
  const [number , setnumber] = useState<boolean>(false)
  const passRef = useRef<HTMLInputElement>(null)
  
  const copytoclipboard = useCallback(()=>{
    console.log(passRef.current?.select());
    
      window.navigator.clipboard.writeText(pass)
    },[pass])
    
    const generatePassword = useCallback(()=>{
      let password:string = ''
      let arr: string[] =[ "a","b","c","d","e","f","g","h","i","j","k","l","m",
        "n","o","p","q","r","s","t","u","v","w","x","y","z", "A","B","C","D","E","F","G","H","I","J","K","L","M",
        "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        if (character) {
          arr.push( "!", "@", "#", "$", "&", "*", "_", "-", "/", "?")
        }
        if (number) {
          arr.push("0","1","2","3","4","5","6","7","8","9")
        }
        console.log(arr);
  for (let i = 1; i <= Number(length); i++) {
  let char = Math.floor(Math.random()*arr.length)
  password += arr[char]
  }
  console.log(password);
  setpass(password)
  
},[length , character , number ])

useEffect(
  generatePassword
  
  ,[length , character , number ,])

  return (
    <>
      <div className="mx-auto max-w-2xl w-full bg-gray-900 text-white px-6 py-5 rounded-2xl shadow-2xl mt-12">
        <h1 className="text-center font-extrabold text-5xl mb-4 mt-2 tracking-wide text-blue-400 drop-shadow">
          Password Generator
        </h1>

        <div className="flex mb-6 mt-10 shadow-inner rounded-xl overflow-hidden border border-blue-500">
          <input
            className="px-4 py-3 text-lg w-full outline-none bg-gray-100 text-black placeholder-gray-600"
            type="text"
            placeholder="Generate your Password"
            readOnly
            ref={passRef}
            value={pass}
          />
          <button
            type="button"
            onClick={copytoclipboard}
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white font-semibold px-5 cursor-pointer"
          >
            Copy
          </button>
        </div>

        <div className="flex w-full justify-between items-center mb-6 mt-10">
          <div className="flex items-center flex-col">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="accent-blue-500 w-40"
              onChange={(e)=>{setlength(e.target.value)}}
            />
            <label htmlFor="range" className="text-[18px] mt-1 text-gray-300">
              Length {length}
            </label>
          </div>

          <div className="flex gap-6">
            <div className="flex items-center flex-col">
              <input
                type="checkbox"
                name="num"
                id="num"
                className="w-5 h-5 accent-blue-500"
                onChange={()=>{setnumber((prev:boolean) =>!prev)}}
              />
              <label htmlFor="num" className="text-[17px] mt-1 text-gray-300">
                Numbers 
              </label>
            </div>
            <div className="flex items-center flex-col">
              <input
                type="checkbox"
                name="char"
                id="char"
                className="w-5 h-5 accent-blue-500"
                onChange={()=>{setcharacter((prev:boolean) =>!prev)}}
              />
              <label htmlFor="char" className="text-[17px] mt-1 text-gray-300">
                Characters 
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
