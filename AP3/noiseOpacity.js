//Ricardo Velasquez
//AP3

//Start Class NoiseOpacity##########
class NoiseOpacity{
  constructor(){
    this.xOff = 0;
    this.yOff = 0;
    this.inc = 0.01;
    this.opacity = 0;
    // pixelDensity(1);

  }

  render(){
    loadPixels();
    this.yOff = 0;
    for (let y = 0; y < height; y++){
      this.xOff = 0;

      for (let x = 0; x < width; x++){
        let index = (x + y * width) * 4;

        this.clr = noise(this.xOff, this.yOff);

        pixels[index] = this.clr * noiseColor.color().levels[0];
        pixels[index + 1] = this.clr * noiseColor.color().levels[1];
        pixels[index + 2] = this.clr * noiseColor.color().levels[2];
        pixels[index + 3] = 255;

        this.xOff += this.inc;

      }

      this.yOff += this.inc;

    }

    updatePixels();
    // noLoop();

  }

}
//End Class NoiseOpacity##########
