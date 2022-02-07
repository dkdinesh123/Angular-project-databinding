import { Directive,ElementRef,HostBinding,HostListener,Input,OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

 @Input() defaultColor: string = 'powderblue';
// defaultColor: string = 'powderblue';
@Input('appBetterHighlight') highlightColor: string= 'gold';

@HostBinding('style.backgroundColor') bgColor!: string;

  constructor(private elRef:ElementRef,private renderer: Renderer2) { }
  ngOnInit(): void {
      // this.elRef.nativeElement.style.backgroundColor = this.defaultColor;
      // this.renderer.setStyle(this.elRef.nativeElement,'background-color',this.defaultColor);
      this.bgColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseenter(event:Event)
  {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color',this.highlightColor);
    this.bgColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(event:Event)
  {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color',this.defaultColor);
    this.bgColor = this.defaultColor;
    
    
  }
}
