# jang chanhee Portfolio

next js와 tailwind를 사용해 제작한 mac os 컨셉의 포트폴리오 입니다. 각 프로젝트에 관한 내용을 browser 처럼 열어서 확인 가능하며, 마우스를 통해 움직이거나 크기를 조정하는 동작이 가능합니다.
<br/>
<br/>
<br/>

<h1>개발 기간</h1>
2023.07.28~2023.08.14
<br/>
<br/>
<br/>
<h1>📚 STACKS</h1>
<div align=center>
	<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
	<img src="https://img.shields.io/badge/next-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
	<img src="https://img.shields.io/badge/tialwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
	<img src="https://img.shields.io/badge/reduxtoolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white">
	<img src="https://img.shields.io/badge/reactslick-0063DC?style=for-the-badge">
	<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
	<img src="https://img.shields.io/badge/reacticons-D8352A?style=for-the-badge&logo=react&logoColor=white">
	<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</div>
<br/>
<br/>
<br/>
<div>
<h2>🔗 Deploy</h2>
Vercel을 통한 배포 ▶︎
<a href='https://jangchanhee.vercel.app/'>바로 가기</a>
</div>
<br/>
<br/>
<br/>
<h1>🔧 주요 기능</h1>
<h3>drag</h3>
state를 통해 위치와 크기값이 동적으로 정해지는 전체적인 뼈대가 될 div와 mouse event를 통해 left와 top 값을 변화시킬 div를 만들어 구현했습니다. 기능 구현은 <a heaf='https://velog.io/@bepyan/series/DND-%EB%BD%80%EA%B0%9C%EA%B8%B0'>bepyan님 블로그</a>를 참고하였습니다.

```tsx
function Browser() {
  const [browserConfig, setBrowserConfig] = useState({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  });

  return (
    <div className="browser-container">
      <div
        className="browser-mover browser-topbar"
        {...dragMouseDown((intercalX, intervalY) => {
          setBrowserConfig({
            x: x + intervalX,
            t: y + intervalY,
            w,
            h,
          });
        })}
      ></div>
    </div>
  );
}
```

onMouseDown 객체를 반환하는 utill 함수를 통해 mouseMove의 시작 위치과 실시간 위치를 빼어 움직인 거리를 인자로 받는 콜백함수에 전달하여 원하는 동작이 가능하도록 구현했습니다.

```ts
function dragMouseDown(
  onDrag: (intervalX: number, intervalY: number) => void,
  stopPropagation?: boolean
) {
  if (stopPropagation) e.stopPropagation();

  const mouseMoveHandler = (mouseE: MouseEvent) => {
    const intervalX = mouseE.screenX - e.screenX;
    const intervalY = mouseE.screenY - e.screenY;
    onDrag(intervalX, intervalY);
  };

  const mouseUpHandler = () => {
    document.removeEventListener("mousemove", mouseMoveHandler);
  };

  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler, { once: true });
}
```

<h3>resize</h3>
resize 기능은 state를 변경시키는 투명한 position absolute의 div들을 각 모서리와 테두리에 위치시켜 구현했습니다.

resize의 경우 x,y 값이 변화하는 만큼 w,h을 증가시키거나 감소시켜 반대편 테두리의 위치를 고정했습니다.

```tsx
function Browser() {
  const [browserConfig, setBrowserConfig] = useState({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  });

  const inrange = (n: number, min: number, max: number) => {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  };

  return (
    <div className="browser-container">
      <div
        className="browser-resizer n"
        {...dragMouseDown((intercalX, intervalY) => {
          setBrowserConfig({
            x,
            y: inrange(y + interval.y, 0, y + h - MIN_H),
            w,
            h: inrange(h - interval.y, MIN_H, y + h),
          });
        })}
      ></div> {/* x8 (n,s,w,e,nw,ne,sw,se)*/}
    </div>
  );
}
```

<h3>image slide</h3>

이미지가 첨부된 contents에 react-slick 라이브러리를 통해 반응형 slide를 구현했습니다. browser의 크기에 따라 slider의 너비와 높이가 변화합니다.

```tsx
function CarouserlSlide({ images, w }: CarouselProps) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div
            key={img}
            style={{
              width: w,
              height: w / 2,
            }}
          >
            <Image
              src={img}
              alt={`image${i}`}
              width={w / 1.3}
              height={w / 3}
              style={{ margin: "auto", borderRadius: "0.5rem" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
```
