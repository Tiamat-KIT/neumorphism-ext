export default function SubmitForm(){
    return (
        <form>
          <div className="w-full rounded-full bg-white dark:bg-slate-500">
            <textarea wrap="hard" autoComplete="on" autoCorrect="on" className="dark:bg-slate-500 text-2xl resize-none" inputMode="text"/>
         </div>
          <button className="rotate-180 p-3 text-3xl absolute bottom-1 right-4 bg-white/10">✐</button>
        </form>
    )
}