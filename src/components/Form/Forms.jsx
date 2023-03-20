import QRCode from 'qrcode'
import { useState } from 'react'

function Forms() {
	const [url, setUrl] = useState({
    title: '',
    description: ''
  })
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(
      JSON.stringify(url), {
			width: 320,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)
			setQr(url)
		})
	}

  const handleChange = (e) => {
    setUrl({...url, [e.target.name]: [e.target.value]})
  } 

	return (
		<div>
			<h1>QR Generator</h1>
			<input 
				type="text"
				placeholder="El leedor"
				value={url.title}
        name='title'
				onChange={handleChange} />
        
        <input type="text"
        placeholder='Este es un libro muy leible sobre como se leen otros libros leibles' 
        value={url.description}
        name='description'
        onChange={handleChange}/>

			<button onClick={GenerateQRCode}>Generate</button>
			{qr && <>
				<img src={qr} alt=''/>
				<a href={qr} download="qrcode.png">Download</a>
			</>}
		</div>
	)
}

export default Forms