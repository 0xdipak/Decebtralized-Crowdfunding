import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-screen bg-gray-500">
      <div className="w-full  flex flex-col items-center justify-center pt-40">
        <div className="bg-gray-700 p-16 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold mb-6">Team Members</h1>
          <div className="flex flex-col items-center justify-center space-y-3">
            <p className="text-2xl font-semibold text-gray-400">Dipak Sharma</p>
            <p className="text-2xl font-semibold text-gray-400">
              Atrip Limbu (<span className='animate-pulse text-red-600 transition-all duration-200'> Tekando</span> )
            </p>
            <p className="text-2xl font-semibold text-gray-400">
              Rabin Rana (<span className='animate-pulse text-red-600 transition-all duration-200'> Dude </span>)
            </p>
            <p className="text-2xl font-semibold text-gray-400">
              Krish Gurung (<span className='animate-pulse text-red-600 transition-all duration-200'> Hanuman </span>)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
