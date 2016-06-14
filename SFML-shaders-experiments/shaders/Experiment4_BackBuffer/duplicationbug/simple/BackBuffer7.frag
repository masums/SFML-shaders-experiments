uniform float time;
uniform vec2 resolution;
uniform sampler2D texture;
uniform vec2 mouse; 

void main( void ) {

	vec2 p =  gl_FragCoord.xy -resolution/2.0-vec2(300*sin(time),300*cos(time));

	p*=10.0;
	
	

	float xx = 0.0;
	
	float k = time*.07;
	
	for(float i=0.0;i<50.0;i++)
	{
		float r=sin(i*k)/cos(i*k);
			
		float y=r*sin(i);
    		float x=r*cos(i);
		
		xx+=(1.6*sqrt(i))/length(vec2(p.x+10.0*i*x,p.y+10.0*i*y)); 
	}
	

	vec4 color = vec4( xx,xx*0.4,0.0, 1.0 );
	
	
	vec2 coord = gl_TexCoord[0].st;
	


    vec4 backpixel = texture2D(texture, vec2(coord.x,1.0-coord.y));
	color = max(color,backpixel);

	gl_FragColor = color;
}