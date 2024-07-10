
const Loader = () => {
  return (
    <div
  className="flex size-full h-screen items-center justify-center bg-slate-900"
  role="status">
 <div className="relative flex items-center justify-center">
    <div className="absolute size-32 animate-spin rounded-full border-y-4 border-yellow-500"></div>
    <img src="./Logo.png"  className="size-28 rounded-full"/>
</div>
</div>
  )
}

export default Loader
