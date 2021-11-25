const line = require("@line/bot-sdk");

const client = new line.Client({
  channelAccessToken:
    "tDcCgW6YfJUhQ15V/Oii2uzvvIqEXUE/3xsEuAtIYeKWTMF+4CbtY77ohXp6Ry9Q/mhHO1r212CrHvUokkxk28P1W5sQdBA6dJ4jeH/4OUHbDbxRhl6EFuHsu0e6TZoNHQg7GZZzI0A8hk9BTzrUMgdB04t89/1O/w1cDnyilFU=",
});

const PushVdo = (userName, initial_Symptoms, Date, time, doctorName,status, meetingLink) => {
  return [
    {
      type: "flex",
      altText: "คำขอการทำนัดสำเร็จ",
      contents: {
      "type": "bubble",
      "direction": "ltr",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "คำขอการทำนัดสำเร็จ",
            "weight": "bold",
            "size": "xl",
            "align": "start",
            "contents": []
          },
          {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "margin": "lg",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "ชื่อ",
                    "size": "md",
                    "color": "#AAAAAA",
                    "flex": 1,
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": `${userName}`,
                    "size": "md",
                    "color": "#666666",
                    "flex": 2,
                    "wrap": true,
                    "contents": []
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "อาการ",
                    "size": "md",
                    "color": "#AAAAAA",
                    "flex": 1,
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": `${initial_Symptoms}`,
                    "size": "md",
                    "color": "#666666",
                    "flex": 2,
                    "wrap": true,
                    "contents": []
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "วัน",
                    "size": "md",
                    "color": "#AAAAAA",
                    "flex": 1,
                    "align": "start",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": `${Date}`,
                    "size": "md",
                    "color": "#666666",
                    "flex": 2,
                    "wrap": true,
                    "contents": []
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "เวลา",
                    "size": "md",
                    "color": "#AAAAAA",
                    "flex": 1,
                    "align": "start",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": `${time}`,
                    "size": "md",
                    "color": "#666666",
                    "flex": 2,
                    "wrap": true,
                    "contents": []
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "ชื่อแพทย์",
                    "size": "md",
                    "color": "#AAAAAA",
                    "flex": 1,
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": `${doctorName}`,
                    "size": "md",
                    "color": "#666666",
                    "flex": 2,
                    "wrap": true,
                    "contents": []
                  }
                ]
              },
              {
                "type": "separator"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "สถานะ",
                    "size": "md",
                    "color": "#AAAAAA",
                    "flex": 1,
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": `${status}`,
                    "size": "md",
                    "color": "#666666",
                    "flex": 2,
                    "wrap": true,
                    "contents": []
                  },
                  {
                    "type": "spacer",
                    "size": "sm"
                  }
                ]
              },
              {
                "type": "separator"
              },
              {
                "type": "text",
                "text": "โปรดเข้าพบแพทย์ตามเวลาที่ทำนัดไว้",
                "size": "md",
                "color": "#666666",
                "align": "center",
                "margin": "xxl",
                "contents": []
              }
            ]
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "flex": 0,
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": "คลิ๊กเพื่อพบแพทย์",
              "uri": `${meetingLink}`
            },
            "color": "#A5B4FC",
            "height": "sm",
            "style": "primary"
          }
        ]
      }
    },
  }
  ]
};

// console.log("start");
// client
//   .pushMessage(
//     "U3469bee1028c5f4c2e16199bb53ec5b7",
//     PushVdo("PushVdo")
//   )
//   .then(() => {
//     console.log("done");
//   })
//   .catch((err) => {
//     // error handling
//     console.log(err);
//   });

module.exports = { client, PushVdo };
