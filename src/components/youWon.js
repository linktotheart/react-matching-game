
export default function YouWon({resetGame, time}) {
	function fmtMSS(s){   // accepts seconds as Number or String. Returns m:ss
		return( s -         // take value s and subtract (will try to convert String to Number)
				( s %= 60 ) // the new value of s, now holding the remainder of s divided by 60 
							// (will also try to convert String to Number)
			  ) / 60 + (    // and divide the resulting Number by 60 
							// (can never result in a fractional value = no need for rounding)
							// to which we concatenate a String (converts the Number to String)
							// who's reference is chosen by the conditional operator:
				9 < s       // if    seconds is larger than 9
				? ':'       // then  we don't need to prepend a zero
				: ':0'      // else  we do need to prepend a zero
			  ) + s ;       // and we add Number s to the string (converting it to String as well)
	}
	return (
		<>
			<div className="overlay fixed inset-0 bg-slate-900 z-20 opacity-70"></div>
			<div className="fixed top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2 ">
				<div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 bg-slate-50 text-pumpkin-500">
					<h2 className="text-2xl md:text-4xl tracking-wide">You Won!😳</h2>
					<p className="flex-1 text-center text-sm text-gray-400">Current Best: {fmtMSS(time)}s</p>
					<button type="button" onClick={resetGame} className="px-8 py-3 font-semibold bg-pumpkin-400 text-white">
						Start Again
					</button>
				</div>
			</div>
		</>
	)
}
