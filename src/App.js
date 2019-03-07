import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import Output from "./output";

class App extends Component {
	output = <Output className="output hide" />
	cats = [
		{
			id: 1,
			image:
				"https://cdn.images.express.co.uk/img/dynamic/1/590x/Cat-being-stroked-518887.jpg",
			count: 0
		},
		{
			id: 2,
			image:
				"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
			count: 0
		},
		{
			id: 3,
			image: "https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg",
			count: 0
		},
		{
			id: 4,
			image:
				"https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/549585-istock-909106260.jpg",
			count: 0
		},
		{
			id: 5,
			image:
				"https://www.rd.com/wp-content/uploads/2018/04/shutterstock_728421994-760x506.jpg",
			count: 0
		},
		{
			id: 6,
			image:
				"http://kitty-whisperer.com/wp-content/uploads/2018/08/cat-cute-wallpaper-download-0110.jpg",
			count: 0
		},
		{
			id: 7,
			image:
				"https://data.whicdn.com/images/298844185/large.jpg?t=1507433077g",
			count: 0
		},
		{
			id: 8,
			image:
				"https://images.hellogiggles.com/uploads/2016/12/22040628/albert-munchkin-cat-instagram-famous.jpg",
			count: 0
		},
		{
			id: 9,
			image:
				"https://cdn.shopify.com/s/files/1/0015/7483/0169/products/product-image-205306569.jpg?v=1533767398",
			count: 0
		},
		 {
			id: 10,
			image:
				"https://images-na.ssl-images-amazon.com/images/I/71CBYfX6gOL._SX425_.jpg",
			count: 0
		},
	];

	fakes = [
		{
			id: 1,
			image:
				"https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/P793621",
			count: 0
		},
		{
			id: 2,
			image:
				"https://i5.walmartimages.com/asr/df5dff68-c64e-43c7-b8fd-75fe20f14cdf_1.8ba67d5d0ababdb098ee94eb7b51c746.jpeg",
			count: 0
		},
		{
			id: 3,
			image: "http://ecx.images-amazon.com/images/I/41O1EVIrtYL.jpg",
			count: 0
		},
		{
			id: 4,
			image:
				"https://www.dogster.com/wp-content/uploads/2015/05/dog-cat-full.jpg",
			count: 0
		},
		{
			id: 5,
			image:
				"https://huskyheadlines.files.wordpress.com/2012/02/boo-the-cutest-puppy-in-the-world-in-a-halloween-costume.jpg",
			count: 0
		},
		{
			id: 6,
			image:
				"https://assets.entrepreneur.com/content/3x2/2000/20180626160515-GettyImages-492715713.jpeg",
			count: 0
		},
		{
			id: 7,
			image:
				"https://static.slickdealscdn.com/attachment/5/1/4/6552067.attach",
			count: 0
		},
		{
			id: 8,
			image:
				"https://usercontent1.hubstatic.com/8604850_f520.jpg",
			count: 0
		},
		{
			id: 9,
			image:
				"https://pro2-bar-s3-cdn-cf4.myportfolio.com/5a72d570ca6965433c1334b8fb9d6543/fbd9dcb58deaf436fbbb5d9e_rw_1920.jpg",
			count: 0
		},
		 {
			id: 10,
			image:
				"https://i1.wp.com/ae01.alicdn.com/kf/HTB1sfdgOpXXXXXkXVXXq6xXFXXXT/Fake-Striped-Shawl-Collar-Clothes-Pet-Cat-Dog-Clothes.jpg",
			count: 0
		},
	];
	counts = this.cats.length+1;
	t1 = this.cats.map(this.setCat);
	t2 = this.fakes.map((x)=>this.setFake(x));
	mixed = this.randomize(this.t1, this.t2);
	total = this.mixed.length;
	out;
  state = {
    items: this.mixed
	};
	clicked = 0;
 	choices = [];
	responses = ["That was cute right?", "Are you sure?"];

	componentDidMount(event) {
		this.out = this.getObject('output');
	}

	setCat(a){
		a.cat = 1;
		return a;
	}

	setFake(a){
		a.id = this.counts++;
		a.cat = 0;
		return a;
	}

	randomize(a,b)
	{
		var a1 = [];
		var t = a.length;
		for (let index = 0; index < t; index++) {
			a1.push(a[index]);
			a1.push(b[index]);
		}
		return a1;
	}

  getChoices() {
    var c1 = this.getChoice();
		var c2 = this.getChoice();
		while(c1==c2)
		{
			c2 = this.getChoice();
		}
		this.choices = [{id:c1.id, image:c1.image, cat:c1.cat},
			 {id:c2.id, image:c2.image, cat:c2.cat}];
		return this.choices
  }

  getChoice() {
    var t = this.getRan(this.total);
    t = t >= this.total ? t - 1 : t;
    return this.state.items[t];
  }

  getRan(n) {
    return Math.round(Math.random() * this.total);
  }

  updateCount(i) {
    this.items[i].count++;
	}
	
	getObject(s)
	{
		return document.getElementById(s);
	}

	getDOM(s){
		return document.querySelectorAll(s);
	}

	outputTest(a)
	{
		var r;
		var res =[];
		for (let index = 0; index < a.length; index++) {
			r = a[index].id+":"+a[index].cat+" ";
			res.push(r);
		}
		return res;
	}

	timer;
	result = <span>Best rated image is <br /><img src={this.getTopImage().image} /></span>

	getRegisterClick(e, id) {
		var node = this.getDOM('#output');
		var obj = this.choices[e];
		var c = obj.id;
		// var res = this.state.items[c-1];
		console.log("c, id, cat: "+[c, obj.id, obj.cat]);
		// console.log("mixed: "+this.outputTest(this.state.items));
		if (this.clicked>=this.total-1)
		{
			// console.log("Ended "+[this.clicked, this.total]);
			var choice1 = this.getDOM('#choice1');
			var choice2 = this.getDOM('#choice2');
			choice1[0].innerHTML = 
			choice2[0].innerHTML = '';
//			this.removeEventListener("onclick", this.getRegisterClick);
			ReactDOM.render(this.result, this.out);
			this.out.className = 'output';
			this.clicked++;
			clearTimeout(this.timer);
			return false;
		} else {
			var msg = obj.cat>0 ? this.responses[0] : this.responses[1];
			ReactDOM.render(msg, this.out);
			this.out.className = 'output';
			var n = this.getChoices();
			var i1 = document.querySelectorAll('#item1');
			var i2 = document.querySelectorAll('#item2');
			if (obj.cat) obj.count++;
			i1[0].src = n[0].image;
			i2[0].src = n[1].image;
			this.timer = setTimeout(()=>{this.removeResponse()}, 1000);
		}
		this.clicked++;
	}

	removeResponse()
	{
		ReactDOM.render("", this.out);
		this.out.className = 'output hide';
	}

	getImage(e){
		return <img src={e.image} alt="test" />;
	}

	getTopImage()
	{
		var n;
		var lastItem, topItem;
		var item = this.state.items;
		var t = item.length;
		topItem = item[0];
		for (let index = 0; index < t; index++)
		{
			n = item[index];
			if (n.count && n.count>0)
			{
				if (n.count>topItem.count)
				topItem = n;
			}
			lastItem = n;
			// console.log("lastItem "+[topItem.count]);
		}
		return topItem;
	}

	render() {
		this.getChoices()
    return (
     <div>
         <h2>Which of these is a cat?</h2>
        <div className="choose">
          <span id="choice1">
            <img id="item1" onClick={(e)=>this.getRegisterClick(0, this.choices[0].id)} alt="cat" src={this.choices[0].image} />
          </span>
          <span id="choice2">
            <img id="item2" onClick={(e)=>this.getRegisterClick(1, this.choices[1].id)} alt="cat" src={this.choices[1].image} />
          </span>
        </div>
				{this.output}
     </div>
    );
  }
}

export default App;
