
const Layout = ( { children } ) => {
    return (
        <div className="flex flex-col items-center mt-6 md:mb-72 text-stone-700 font-bold text-lg min-h-full">
            { children }
        </div>
    )
}

export default Layout