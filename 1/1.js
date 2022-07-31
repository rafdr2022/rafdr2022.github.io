function Ampliar(imagem)
{
	//alert("asdfsf");
	document.getElementById('tela').src = imagem;
	document.getElementById('exibicao').style.display = 'block';
}

function Fechar()
{
	document.getElementById('exibicao').style.display = 'none';
}
