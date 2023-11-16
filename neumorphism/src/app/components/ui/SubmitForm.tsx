export default function SubmitForm(){
    return (
        <form className="relative">
          <input className="p-5 text-2xl w-full rounded-full resize-none break-all dark:bg-slate-500" inputMode="text"/>
          <button className="rotate-180 p-3 text-3xl absolute bottom-1 right-4 bg-white/10">✐</button>
        </form>
    )
}