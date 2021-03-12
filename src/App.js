import React from 'react';
import './App.css';
import Button from "./component/Button";
import Product from "./component/Product";
import Tile from "./component/Tile";
import img_one from "./assets/bag_1.png";
import img_two from "./assets/bag_2.png";
import img_three from "./assets/bag_3.png";
import img_four from "./assets/bag_4.png";
import brand_img from "./assets/brand.png";
import story_img from "./assets/our_story.png";

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
          <Button
          text="to the collection"
          disabled={false}
          />
          <Button
              text="shop all bags"
              disabled={false}
          />
          <Button
              text="pre-orders"
               disabled={true}
          />
      </nav>
          <main>
              <Product
                  banner="Best Seller"
                  image={img_one}
                  description="The handy bag"
                  price="€ 400,-"
              />
              <Product
                  banner="Best Seller"
                  image={img_two}
                  description="The stylish bag"
                  price="€ 250,-"
              />
              <Product
                  banner="New collection"
                  image={img_three}
                  description="The simple bag"
                  price="€ 300,-"
              />

              <Product
                  banner="New collection"
                  image={img_four}
                  description="The trendy bag"
                  price="€ 150,-"
              />
          </main>
          <footer>
              <Tile
                title="The Brand"
              >
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magni nobis voluptate? Ab ducimus illum laudantium nam quasi quod soluta."</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

              </Tile>
              <Tile image={brand_img}
              />
              <Tile image={story_img}
              />
              <Tile
                  title="Our Story"
              >
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur magni nobis voluptate? Ab ducimus illum laudantium nam quasi quod soluta. magni nobis voluptate? Ab ducimus illum laudantium nam quasi quod soluta."</p>
              </Tile>

          </footer>
      </>
  );
}

export default App;



