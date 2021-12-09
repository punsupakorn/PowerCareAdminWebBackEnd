const line = require("@line/bot-sdk");

const client = new line.Client({
  channelAccessToken:
    "tDcCgW6YfJUhQ15V/Oii2uzvvIqEXUE/3xsEuAtIYeKWTMF+4CbtY77ohXp6Ry9Q/mhHO1r212CrHvUokkxk28P1W5sQdBA6dJ4jeH/4OUHbDbxRhl6EFuHsu0e6TZoNHQg7GZZzI0A8hk9BTzrUMgdB04t89/1O/w1cDnyilFU=",
});

const PushVdo = (
  userName,
  initial_Symptoms,
  Date,
  time,
  doctorName,
  status,
  meetingLink
) => {
  return [
    {
      type: "flex",
      altText: "คำขอการทำนัดสำเร็จ",
      contents: {
        type: "bubble",
        direction: "ltr",
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "คำขอการทำนัดสำเร็จ",
              weight: "bold",
              size: "xl",
              align: "start",
              contents: [],
            },
            {
              type: "box",
              layout: "vertical",
              spacing: "sm",
              margin: "lg",
              contents: [
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "ชื่อ",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${userName}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "อาการ",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${initial_Symptoms}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "วัน",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      align: "start",
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${Date}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "text",
                      text: "เวลา",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      align: "start",
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${time}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "text",
                      text: "ชื่อแพทย์",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${doctorName}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "separator",
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "text",
                      text: "สถานะ",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${status}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                    {
                      type: "spacer",
                      size: "sm",
                    },
                  ],
                },
                {
                  type: "separator",
                },
                {
                  type: "text",
                  text: "โปรดเข้าพบแพทย์ตามเวลาที่ทำนัดไว้",
                  size: "md",
                  color: "#666666",
                  align: "center",
                  margin: "xxl",
                  contents: [],
                },
              ],
            },
          ],
        },
        footer: {
          type: "box",
          layout: "vertical",
          flex: 0,
          spacing: "sm",
          contents: [
            {
              type: "button",
              action: {
                type: "uri",
                label: "คลิ๊กเพื่อพบแพทย์",
                uri: `${meetingLink}`,
              },
              color: "#A5B4FC",
              height: "sm",
              style: "primary",
            },
          ],
        },
      },
    },
  ];
};

const Treatment = (Date, time, medicine, otherserviceprice, TotalPrice) => {
  let totalmedicine = medicine.map((med) => med.Price * med.quantity);
  let result = totalmedicine.reduce((a, b) => a + b, 0);
  return [
    {
      type: "flex",
      altText: "สรุปค่าใช้จ่าย",
      contents: {
        type: "bubble",
        body: {
          type: "box",
          layout: "vertical",
          spacing: "md",
          action: {
            type: "uri",
            label: "Action",
            uri: "https://linecorp.com",
          },
          contents: [
            {
              type: "text",
              text: "สรุปค่าใช้จ่าย",
              weight: "bold",
              size: "xl",
              contents: [],
            },
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "text",
                  text: "วันที่",
                  size: "xs",
                  flex: 1,
                  align: "end",
                  contents: [],
                },
                {
                  type: "text",
                  text: `${Date}`,
                  size: "xs",
                  align: "end",
                  contents: [],
                },
              ],
            },
            {
              type: "box",
              layout: "baseline",
              contents: [
                {
                  type: "text",
                  text: "เวลา",
                  size: "xs",
                  align: "end",
                  contents: [],
                },
                {
                  type: "text",
                  text: `${time}`,
                  size: "xs",
                  align: "end",
                  contents: [],
                },
              ],
            },
            // {
            //   type: "box",
            //   layout: "vertical",
            //   spacing: "md",
            //   contents: [
            //     {
            //       type: "box",
            //       layout: "baseline",
            //       contents: [
            //         {
            //           type: "text",
            //           text: `${medicine.MedicineName}`,
            //           weight: "bold",
            //           size: "md",
            //           margin: "sm",
            //           contents: [],
            //         },
            //         {
            //           type: "text",
            //           text: `${medicine.quantity}`,
            //           color: "#AAAAAA",
            //           align: "center",
            //           contents: [],
            //         },
            //         {
            //           type: "text",
            //           text: `${medicine.Price}`,
            //           align: "end",
            //           contents: [],
            //         },
            //       ],
            //     },
            //   ],
            // },
            {
              type: "separator",
            },
            {
              type: "box",
              layout: "baseline",
              contents: [
                {
                  type: "text",
                  text: "ค่ายารวม",
                  weight: "bold",
                  margin: "sm",
                  contents: [],
                },
                {
                  type: "text",
                  text: `${result}`,
                  align: "end",
                  contents: [],
                },
              ],
            },
            {
              type: "separator",
            },
            {
              type: "box",
              layout: "baseline",
              contents: [
                {
                  type: "text",
                  text: "ค่าบริการเพิ่มเติม",
                  weight: "bold",
                  margin: "sm",
                  contents: [],
                },
                {
                  type: "text",
                  text: `${otherserviceprice}`,
                  align: "end",
                  contents: [],
                },
              ],
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "text",
                      text: "Total",
                      weight: "bold",
                      size: "md",
                      flex: 1,
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${TotalPrice}`,
                      align: "end",
                      contents: [],
                    },
                  ],
                },
              ],
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "spacer",
                },
                {
                  type: "image",
                  url: "https://www.img.in.th/images/4c441a7a3f463e068e83fcbe9a596b23.jpg",
                  size: "xl",
                },
                {
                  type: "text",
                  text: "สแกนเพื่อชำระเงิน",
                  size: "md",
                  align: "center",
                  contents: [],
                },
              ],
            },
          ],
        },
      },
    },
  ];
};

const SummaryPostpone = (
  userName,
  symptom,
  Date,
  olddate,
  OldTime,
  NewTime,
  doctorName,
  status
) => {
  return [
    {
      type: "flex",
      altText: "แจ้งการเลื่อนนัด",
      contents: {
        type: "bubble",
        direction: "ltr",
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "แจ้งการเลื่อนนัด",
              weight: "bold",
              size: "xl",
              align: "start",
              contents: [],
            },
            {
              type: "box",
              layout: "vertical",
              spacing: "sm",
              margin: "lg",
              contents: [
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "ชื่อ",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${userName}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "อาการ",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${symptom}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "text",
                      text: "ชื่อแพทย์",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${doctorName}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "separator",
                },
                {
                  type: "text",
                  text: "ข้อมูลการทำนัดเก่า",
                  weight: "bold",
                  align: "start",
                  contents: [],
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "text",
                      text: "วัน",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      align: "start",
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${olddate}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "text",
                      text: "เวลา",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      align: "start",
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${OldTime}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "separator",
                  margin: "md",
                  color: "#FFFFFFFF",
                },
                {
                  type: "text",
                  text: "ข้อมูลการทำนัดใหม่",
                  weight: "bold",
                  align: "start",
                  contents: [],
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "text",
                      text: "วัน",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      align: "start",
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${Date}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "text",
                      text: "เวลา",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      align: "start",
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${NewTime}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "separator",
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "text",
                      text: "สถานะ",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${status}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                    {
                      type: "spacer",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  ];
};

const ConfirmCancel = (
  userName,
  initial_Symptoms,
  date,
  time,
  doctorName,
  status
) => {
  return [
    {
      type: "flex",
      altText: "แจ้งการยกเลิกนัด",
      contents: {
        type: "bubble",
        direction: "ltr",
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "แจ้งการยกเลิกนัด",
              weight: "bold",
              size: "xl",
              align: "start",
              contents: [],
            },
            {
              type: "box",
              layout: "vertical",
              spacing: "sm",
              margin: "lg",
              contents: [
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "ชื่อ",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${userName}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "อาการ",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${initial_Symptoms}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "วัน",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      align: "start",
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${date}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "text",
                      text: "เวลา",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      align: "start",
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${time}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "text",
                      text: "ชื่อแพทย์",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${doctorName}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                  ],
                },
                {
                  type: "separator",
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "text",
                      text: "สถานะ",
                      size: "md",
                      color: "#AAAAAA",
                      flex: 1,
                      contents: [],
                    },
                    {
                      type: "text",
                      text: `${status}`,
                      size: "md",
                      color: "#666666",
                      flex: 2,
                      wrap: true,
                      contents: [],
                    },
                    {
                      type: "spacer",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  ];
};

// console.log("start");
// client
//   .pushMessage(
//     "U3469bee1028c5f4c2e16199bb53ec5b7",
//     PushVdo("Confirm Appointment")
//   )
//   .then(() => {
//     console.log("done");
//   })
//   .catch((err) => {
//     // error handling
//     console.log(err);
//   });

module.exports = { client, PushVdo, Treatment, SummaryPostpone, ConfirmCancel };
