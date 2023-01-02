let genData = document.querySelector("#fetch")
let text = document.querySelector("#text")
let copy = document.querySelector("#copy")

genData.addEventListener("click",()=>{
	fetch("https://api.quotable.io/random").then((res)=>{
		return res.json()
	}).then((data)=>{
		text.textContent = data.content
	})
})

copy.addEventListener('click',()=>{
	let copyText = text.textContent
	navigator.clipboard.writeText(copyText)
})