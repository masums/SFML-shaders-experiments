uniform float time;
uniform vec2 resolution;
uniform sampler2D texture;
uniform vec2 mouse; 



void main( void ) {

	vec2 p =  gl_FragCoord.xy -resolution/2.0-vec2(cos(sin(time))*cos(mouse.x)*mouse.x,cos(time)*(resolution.y-mouse.y));

	float scale =0.5;

	p*=scale;


	vec4 color = vec4(0.0,0.0,0.0,1.0);

	for(float i=0.0;i<2.0;i+=0.05)
	{
		float xx=   1.0*sqrt(i)/length(vec2(p.x+20.0*i*sign(sin(time*mouse.x)),p.y+20.0*i*sign(cos(time*mouse.x))));
		color+=vec4(fract(xx)*0.5,fract(xx)*0.5,0.0,1.0);
	}


	
	vec2 coord = gl_TexCoord[0].st;
	
    vec4 backpixel = texture2D(texture,  vec2(coord.x,1.0-coord.y));
	
	color = max(color,backpixel);
	
	if(sin(mouse.x*mouse.y)>0.5)
	{
		color.r-=0.007;
		color.g-=0.002;
		color.b-=0.002;
	}
	

	gl_FragColor = color;
}