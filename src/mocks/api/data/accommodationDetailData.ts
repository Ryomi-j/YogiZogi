export const accommodationDetailData = new Array(30)
  .fill(null)
  .map((_, idx) => {
    const names = [
      '역삼 인트로호텔',
      '강남 더 뮤즈',
      '역삼 브라운도트',
      '역삼 마리호텔',
      '역삼 사월호텔',
      '역삼 벤',
      '강남 타라',
      '역삼 PREMIER XYM',
      '선릉 그레이호텔',
      '강남 봄',
      '역삼 CF호텔',
      '강남 멜리샤호텔',
      '역삼 H Avenue-역삼점',
      '역삼 아마레',
      '삼성 캘리포니아',
      '강남 제리스플래닛',
      '역삼 호텔 디 아티스트',
      '삼성 JS',
      '역삼 리치웰',
      '대치 컬리넌',
      '강남 캠퍼스',
      '강남 블랑',
      '역삼 컬리넌',
      '강남 녹스 호텔',
      '역삼 스타 프리미어',
      '삼성 라엠-LaM',
      '선릉 호텔 스타',
      '논현 올인',
      '개포 컬리넌',
      '강남 카파쓰'
    ];

    const accommodationIds = [
      5, 1, 13, 18, 31, 30, 89, 6, 51, 8, 32, 27, 25, 90, 88, 24, 2, 19, 3, 21,
      4, 85, 7, 12, 28, 35, 33, 83, 37, 17, 9
    ];

    const price = [
      30000, 40000, 35000, 0, 0, 30000, 40000, 25000, 30000, 40000, 30000,
      30000, 25000, 30000, 35000, 30000, 30000, 40000, 29800, 30000, 40000,
      20000, 29800, 25000, 25000, 30000, 30000, 35000, 35000, 48800, 35000
    ];
    const rate = [
      9.9, 9.8, 9.7, 9.7, 9.6, 9.6, 9.6, 9.5, 9.5, 9.5, 9.5, 9.5, 9.4, 9.4, 9.4,
      9.4, 9.3, 9.3, 9.3, 9.3, 9.3, 9.3, 9.3, 9.3, 9.3, 9.3, 9.2, 9.2, 9.2, 9.2,
      9.2
    ];
    return {
      id: accommodationIds[idx],
      accommodationName: names[idx],
      category: 1,
      rate: rate[idx],
      address: '서울 강남구 역삼동 678-9',
      region: '강남구 역삼동',
      picUrl:
        '//image.goodchoice.kr/resize_370x220/adimg_new/49914/329560/874943ee5c604e46a4f529d8ecc1558d.jpg',
      lat: 37.50252991,
      lon: 127.0382753,
      info: '<article class="detail_info">\n<!-- 기본 정보 -->\n<h3 class="category" id="default_info_tab" type="h3"><span>기본 정보</span></h3>\n<section class="default_info">\n<!-- 사장님 한마디 & 추천이유 -->\n<div class="comment_mobile">\n<h3>사장님 한마디</h3>\n                    지난 2014년 1층 로비 및 레스토랑, 그랜드 볼룸 등 공용부의 리모델링 이후, 호텔 외관과 7층부터 33층까지 전 객실의 리모델링을 완성하며 완벽히 새로운 호텔로 다시 태어났습니다<br/>\n또한 기존 26층에 위치했던 인터컨티넨탈 클럽 라운지를 최상층인 34층으로 이동시키며 클럽 서비스 강화했습니다                </div>\n<h3>주변정보</h3>\n<ul>\n<li>코엑스 인근</li><li>삼성역 인근</li></ul>\n<h3>공지사항</h3>\n<ul>\n<li><b>[객실 및 부대시설 이용 정원 안내]</b></li><li>객실 : 최대 3인 (성인 3인 또는 성인2인+소인2인 <font color="blue">*만12세 이하</font>)</li><li>레스토랑&amp;바 : 최대 6인 </li><li>클럽 인터컨티넨탈 라운지 : 최대 3인</li><li>투숙 시 호텔 규정에 따른 정원을 반드시 준수해 주시기 바라며, 정원 위반 및 개인 주최 파티 진행 시 퇴실 조치되는 점 양지해주시기 바랍니다</li></ul>\n<h3>기본사항</h3>\n<ul>\n<li>체크인 : 15:00 | 체크아웃 : 11:00</li><li>무료 Wi-Fi</li><li>전 객실 금연</li><li>Bath Amenity (치약, 칫솔 무료)</li><li>무료 주차 (객실 당 1대)</li></ul>\n<h3>인원 추가 정보 </h3>\n<ul>\n<li><b>[기준인원 외 추가 시 안내]</b></li><li><font color="#FF5C5C">※ 엑스트라 베드 사전 요청 필수</font></li><li>기준인원 외 추가 시 엑스트라 베드 추가 비용 84,700원</li><li>조식 포함된 패키지 상품에 추가하는 경우 1인당 121,000원 (조식 1인, 엑스트라 베드 포함)</li><li>클럽 라운지 이용이 포함된 패키지의 경우 1인 추가 금액 205,700원 (클럽 라운지 1인, 엑스트라 베드 포함)</li><li>영유아 인원수 포함 / 최대 인원 초과 불가</li><li>현장 결제</li></ul>\n<h3>투숙객 혜택</h3>\n<ul>\n<li>24시간 프라이빗 다이닝 서비스</li><li>투숙 기간 중 실내 수영장&amp;메트로폴리탄 피트니스 클럽 이용 (사우나 제외)</li><li>바이레도 또는 조말론 어메니티 제공</li><li>구글 크롬캐스트를 통한 OTT(넷플릭스) 시청 가능</li></ul>\n<h3>부대시설</h3>\n<ul>\n<li>레스토랑, 바, 피트니스, 클럽라운지 등 </li><li><b>[메트로폴리탄 피트니스 클럽 이용 안내]</b></li><li>장소 및 운영 시간 : 3층 / 06:00~23:00 <font color="#0652ff">(매달 세 번째 화요일 정기 휴무)</font></li><li>수영장 : 만 12세 이상 및 신장 150cm 이상 이용 가능 / 수영복, 수영모 개인 지참 필수</li><li>체련장 : 만 18세 이상 이용 가능 / 운동화, 양말 개인 지참 필수</li><li>라운지 : 이용 가능 / 단, 음식물 섭취 제한</li><li>문의 : 02-559-7531</li></ul>\n<h3>클럽 라운지 이용안내</h3>\n<ul>\n<li>클럽 인터컨티넨탈 운영 시간이 요일 별로 상이하오니 공식 홈페이지를 참고해주시고 방문 부탁 드립니다</li><li>애프터눈 티와 칵테일 아워의 경우는 투숙률에 따라 2부제 또는 3부제로 운영될 수 있습니다</li></ul>\n<h3>조식 정보</h3>\n<ul>\n<li>그랜드 키친 / 1층 / 06:30~10:30</li><li>1인 70,000원 (만 12세 이상~성인), 35,000원 (만 4세 이상~만 11세 이하), 48개월 미만 무료</li><li>현장결제</li></ul>\n<h3>취사 시설</h3>\n<ul>\n<li>전 객실 취사 불가</li></ul>\n<h3>취소 및 환불 규정</h3>\n<ul>\n<li><b><font color="#CA0101">최초 1박에만 취소 규정 적용, 이후 일자 100% 환불</font></b></li><li>체크인일 기준 1일 전 18시까지 : 100% 환불</li><li>체크인일 기준 1일 전 18시 ~당일 및 No-show : 환불불가  </li><li>취소, 환불시 수수료가 발생할 수 있습니다</li><li><b><font color="#CA0101">아래 객실은 별도 취소 규정이 적용되오니 참고 부탁드립니다</font></b></li><li><b>[Romantic Moments 패키지] 객실 :</b> 체크인 3일 전까지 100% 환불, 이후 환불 불가</li><li><b>[Book Early &amp; Save-룸온리], [Book Early &amp; Save-조식 2인] 객실 :</b> 예약 후 취소, 변경, 환불 불가</li></ul>\n<h3>확인사항 및 기타</h3>\n<ul>\n<li><font color="#0652ff"><b>예약 시, 투숙객 실명으로 예약 진행 필수입니다</b></font></li><li><b>체크인 시 Deposit(보증금) 요구할 수 있고, 퇴실 시 전액 환불됩니다</b></li><li>(단, 유료서비스 이용 및 기물파손 시 청구될 수 있음)</li><li>최대인원 초과시 입실 불가합니다</li><li>미성년자는 보호자 동반없이 이용이 불가합니다</li><li>위의 정보는 호텔의 사정에 따라 변경될 수 있습니다</li><li>해당 이미지는 실제와 상이 할 수 있습니다</li><li>체크인 시 배정 또는 베드타입 미기재 상품은 특정객실과 베드타입을 보장하지 않습니다</li><li>해당 객실가는 세금, 봉사료가 포함된 금액입니다</li><li>수영장 운영은 날씨 또는 호텔 상황에 따라 변동 될 수 있습니다</li><li>애완동물 관련한 별도의 법규 및 규정이 없는 경우, 시각 장애 고객 안내견(보조견)을 제외한 애완 동물 동반 고객은 호텔의 공용 지역 혹은 영업장 출입을 제한 합니다</li><li>시각 장애 고객의 안내를 위한 맹인 안내견(보조견)은 호텔의 공용 지역 및 모든 영업장 내 출입이 가능합니다</li><li>호텔은 고객과 맹인 안내견(보조견)이 호텔을 이용함에 있어 불편함이 없도록 세심한 배려를 제공합니다</li></ul>\n<div class="map" id="google_maps"></div>\n</section>\n<!-- 편의시설 및 서비스 -->\n<h3 class="category" type="h3"><span>편의시설 및 서비스</span></h3>\n<section class="service">\n<ul class="theme_wrap">\n<li class="theme_41">피트니스</li><li class="theme_42">수영장</li><li class="theme_46">레스토랑</li><li class="theme_47">와이파이</li><li class="theme_49">욕실용품</li><li class="theme_50">미니바</li><li class="theme_53">발렛파킹</li><li class="theme_112">엘레베이터</li><li class="theme_132">짐보관가능</li><li class="theme_134">금연</li><li class="theme_136">무료주차</li><li class="theme_141">카페</li><li class="theme_188">편의점</li><li class="theme_195">주차장</li><li class="theme_197">TV</li><li class="theme_198">에어컨</li><li class="theme_199">냉장고</li><li class="theme_200">객실샤워실</li><li class="theme_202">드라이기</li><li class="theme_203">다리미</li><li class="theme_336">장애인편의시설</li> </ul>\n</section>\n<!-- 판매자 정보 -->\n<h3 class="category" type="h3"><span>판매자 정보</span></h3>\n<section class="seller_info">\n<h3>상호</h3>\n<ul>\n<li>파르나스호텔 (주)</li>\n</ul>\n<h3>대표자명</h3>\n<ul>\n<li>여인창</li>\n</ul>\n<h3>주소</h3>\n<ul>\n<li>서울 강남구 테헤란로 521 (삼성동)</li>\n</ul>\n<h3>전화번호</h3>\n<ul>\n<li>02-555-5656</li>\n</ul>\n<h3>사업자번호</h3>\n<ul>\n<li>120-81-01336</li>\n</ul>\n</section>\n</article>',
      picUrlList: [
        {
          id: 96,
          url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/1129/3d173bb76f62cb31cd17e193b0112e61.jpg'
        },
        {
          id: 72,
          url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/1129/360eab6c4f4c2d77d0097de51ed33124.jpg'
        },
        {
          id: 45,
          url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/1129/03f061e442f0a21f800e49fcb0b2854c.jpg'
        },
        {
          id: 129,
          url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/1129/e3d3278b22e7e0d2ccc69f24103191c5.jpg'
        },
        {
          id: 68,
          url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/1129/b2852f8e4dfe024ce2d2af155e429fee.jpg'
        },
        {
          id: 74,
          url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/1129/38281b65d7d69e921f9fa3625ebb5ef1.jpg'
        },
        {
          id: 12,
          url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/1129/e5b6363b27dac389d83b7ad9893acdd1.jpg'
        },
        {
          id: 28,
          url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/1129/5d9a0dd7ee91c26f3465228988986cc7.jpg'
        },
        {
          id: 29,
          url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182031/f548520417580511897f4c4daeec7cc8.jpg'
        },
        {
          id: 30,
          url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182031/f548520417580511897f4c4daeec7cc8.jpg'
        },
        {
          id: 31,
          url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182032/d6f92579232dfcbb1094915919c1112f.jpg'
        },
        {
          id: 32,
          url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182033/e626bed230367d518db6fa5c2cdd1ae6.jpg'
        },
        {
          id: 33,
          url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182034/3a2f056773cb59dcaf4a420a8e580dd3.jpg'
        },
        {
          id: 34,
          url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182035/85d35fe0371bb9d07fdcda8f406a786c.jpg'
        }
      ],
      rooms: [
        {
          id: 1,
          roomName: '랜덤객실',
          checkInTime: '23',
          cheekOutTime: '12',
          defaultPeople: 2,
          maxPeople: 2,
          pictureUrlList: [
            {
              id: 7,
              url: 'https://image.goodchoice.kr/resize_1000X500x0/adimg_new/72748/479210/ab94afc451c0ce2b72d429d267e60525.jpg'
            },
            {
              id: 3,
              url: 'https://image.goodchoice.kr/resize_1000X500x0/adimg_new/72748/479210/ab94afc451c0ce2b72d429d267e60525.jpg'
            },
            {
              id: 1,
              url: 'https://image.goodchoice.kr/resize_1000X500x0/adimg_new/72748/479210/ab94afc451c0ce2b72d429d267e60525.jpg'
            }
          ],
          price: 280000
        },
        {
          id: 2,
          roomName: '로이',
          checkInTime: '23',
          cheekOutTime: '12',
          defaultPeople: 2,
          maxPeople: 2,
          pictureUrlList: [
            {
              id: 11,
              url: 'https://image.goodchoice.kr/resize_1000X500x0/adimg_new/1824/182031/f548520417580511897f4c4daeec7cc8.jpg'
            },
            {
              id: 15,
              url: 'https://image.goodchoice.kr/resize_1000X500x0/adimg_new/1824/182031/f548520417580511897f4c4daeec7cc8.jpg'
            },
            {
              id: 10,
              url: 'https://image.goodchoice.kr/resize_1000X500x0/adimg_new/1824/182031/f548520417580511897f4c4daeec7cc8.jpg'
            }
          ],
          price: 280000
        },
        {
          id: 3,
          roomName: '샴페인골드',
          checkInTime: '23',
          cheekOutTime: '12',
          defaultPeople: 2,
          maxPeople: 2,
          pictureUrlList: [
            {
              id: 22,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182032/d6f92579232dfcbb1094915919c1112f.jpg'
            },
            {
              id: 20,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182032/d6f92579232dfcbb1094915919c1112f.jpg'
            },
            {
              id: 24,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182032/d6f92579232dfcbb1094915919c1112f.jpg'
            }
          ],
          price: 280000
        },
        {
          id: 4,
          roomName: '미스트',
          checkInTime: '23',
          cheekOutTime: '12',
          defaultPeople: 2,
          maxPeople: 2,
          pictureUrlList: [
            {
              id: 31,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182034/3a2f056773cb59dcaf4a420a8e580dd3.jpg'
            },
            {
              id: 30,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182034/3a2f056773cb59dcaf4a420a8e580dd3.jpg'
            },
            {
              id: 35,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182034/3a2f056773cb59dcaf4a420a8e580dd3.jpg'
            }
          ],
          price: 280000
        },
        {
          id: 5,
          roomName: '에메랄드',
          checkInTime: '23',
          cheekOutTime: '12',
          defaultPeople: 2,
          maxPeople: 2,
          pictureUrlList: [
            {
              id: 48,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182035/85d35fe0371bb9d07fdcda8f406a786c.jpg'
            },
            {
              id: 47,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182035/85d35fe0371bb9d07fdcda8f406a786c.jpg'
            },
            {
              id: 44,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182035/85d35fe0371bb9d07fdcda8f406a786c.jpg'
            }
          ],
          price: 280000
        },
        {
          id: 6,
          roomName: '아쿠아',
          checkInTime: '23',
          cheekOutTime: '12',
          defaultPeople: 2,
          maxPeople: 2,
          pictureUrlList: [
            {
              id: 59,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182036/a2eeec430f89bbb6bd22657e1728e4a3.jpg'
            },
            {
              id: 60,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182036/a2eeec430f89bbb6bd22657e1728e4a3.jpg'
            },
            {
              id: 57,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182036/a2eeec430f89bbb6bd22657e1728e4a3.jpg'
            }
          ],
          price: 280000
        },
        {
          id: 7,
          roomName: '다이아골드',
          checkInTime: '23',
          cheekOutTime: '12',
          defaultPeople: 2,
          maxPeople: 2,
          pictureUrlList: [
            {
              id: 66,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182037/49d61aa26737c386fd0a33788f7eea49.jpg'
            },
            {
              id: 68,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182037/49d61aa26737c386fd0a33788f7eea49.jpg'
            },
            {
              id: 69,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182037/49d61aa26737c386fd0a33788f7eea49.jpg'
            }
          ],
          price: 350000
        },
        {
          id: 8,
          roomName: '비앙코',
          checkInTime: '23',
          cheekOutTime: '12',
          defaultPeople: 2,
          maxPeople: 2,
          pictureUrlList: [
            {
              id: 73,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182038/77f001d0f66e0b529e714362aa53ccc4.jpg'
            },
            {
              id: 75,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182038/77f001d0f66e0b529e714362aa53ccc4.jpg'
            },
            {
              id: 74,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182038/77f001d0f66e0b529e714362aa53ccc4.jpg'
            }
          ],
          price: 350000
        },
        {
          id: 9,
          roomName: '브론즈글라스',
          checkInTime: '23',
          cheekOutTime: '12',
          defaultPeople: 2,
          maxPeople: 2,
          pictureUrlList: [
            {
              id: 83,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182039/4aeaf060109750137f5fa6bdeaad6c79.jpg'
            },
            {
              id: 87,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182039/4aeaf060109750137f5fa6bdeaad6c79.jpg'
            },
            {
              id: 85,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/182039/4aeaf060109750137f5fa6bdeaad6c79.jpg'
            }
          ],
          price: 490000
        },
        {
          id: 10,
          roomName: '골드글라스',
          checkInTime: '23',
          cheekOutTime: '12',
          defaultPeople: 2,
          maxPeople: 2,
          pictureUrlList: [
            {
              id: 94,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/193379/80704fdbd87f7be340fce05fb2d41eb8.jpg'
            },
            {
              id: 95,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/193379/80704fdbd87f7be340fce05fb2d41eb8.jpg'
            },
            {
              id: 93,
              url: 'https://image.goodchoice.kr/resize_490x348/adimg_new/1824/193379/80704fdbd87f7be340fce05fb2d41eb8.jpg'
            }
          ],
          price: 400000
        }
      ]
    };
  });
