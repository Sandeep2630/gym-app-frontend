import { useRootContext } from "../hooks/context/useRootContext";

export default function Root() {
  const {color , setColor} = useRootContext()
  return (
    <>
 <button onClick={() =>setColor(prev => (prev == 'red' ? 'black' : 'red'))}>{color}</button> 
    </>
  );
}