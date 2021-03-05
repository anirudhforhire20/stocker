class stockerListItem {
	constructor(name,ticker,img='...',change)
	{
		this.name = name;
		this.ticker = ticker;
		this.img = img;
		this.change = change;
	}
	render(div)
	{
		var body = document.createElement('li');
		body.classList.add('stockerListItem');

		var media = document.createElement('div');
		media.classList.add('stockerItemInfo');

		var img = document.createElement('img');
		img.classList.add('stockerImg');
		img.src = this.img;
		media.append(img);
		this.imgDiv = img;

		var name = document.createElement('h5');
		name.classList.add('itemName');
		let nm = document.createElement('span');
		nm.innerText = this.name;
		name.append(nm);
		let tr = document.createElement('span');
		tr.innerText = '(' + this.ticker + ')';
		name.append(tr);

		media.append(name);

		let state = document.createElement('h5');
		this.state = state;
		state.classList.add('itemState');
		let sb = document.createElement('span');
		this.sybDiv = sb;
		sb.classList.add('symbol');
		let val = document.createElement('span');
		this.valDiv = val;
		val.innerText = this.change;
		if(this.change < 0)
		{
			sb.innerHTML = '&#x25BC;';
			state.style.color = 'red';
		}
		else if(this.change > 0)
		{
			sb.innerHTML = '&#x25B2;';
			state.style.color = 'green';
		}
		else
		{
			sb.innerHTML = '';
			state.style.color = 'yellow';
		}
		state.append(sb);
		state.append(val);

		body.append(media);
		body.append(state);

		div.append(body);


	}
	set setImg(newImg)
	{
		this.img = newImg;
		this.imgDiv.src = newImg;
	}
	set setChange(newVal)
	{
		this.change = newChange;
		if(this.change < 0)
		{
			this.sybDiv.innerHTML = '&#x25BC;';
			this.state.style.color = 'red';
		}
		else if(this.change > 0)
		{
			this.sybDiv.innerHTML = '&#x25B2;';
			this.state.style.color = 'green';
		}
		else
		{
			this.sybDiv.innerHTML = '';
			this.state.style.color = 'yellow';
		}
		this.valDiv = newVal;
	}
}