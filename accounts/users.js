const users = [];

// Paste below (just the message from WhatsApp)
const rawRegistrations = 
`New Registration:
Full Name: Koena Motswi
Contact Number: 0767096779
Email: koenamotswi@gmail.com
Home Address: 1145 Dube Street Maokeng Tembisa
Password: 12345
Rewards: 75 points, In Referrals

New Registration:
Full Name: Precious Mungomezulu
Contact Number: 0665016951
Email: precious@gmail.com
Home Address: 0012 Liliba Moriting Soweto
Password: naledi123
Rewards: 50 points, 1x 10% Off
`;

// DO NOT EDIT BELOW THIS LINE
rawRegistrations.trim().split("New Registration:").forEach(block => {
  if (block.trim()) {
    const fullName = block.match(/Full Name:\s*(.*)/)?.[1]?.trim();
    const contact = block.match(/Contact Number:\s*(.*)/)?.[1]?.trim();
    const email = block.match(/Email:\s*(.*)/)?.[1]?.trim();
    const address = block.match(/Home Address:\s*(.*)/)?.[1]?.trim();
    const password = block.match(/Password:\s*(.*)/)?.[1]?.trim();
    const rewardsLine = block.match(/Rewards:\s*(.*)/)?.[1]?.trim();

    let points = 0;
    let coupons = [];

    if (rewardsLine) {
      const pointMatch = rewardsLine.match(/(\d+)\s*points?/i);
      points = pointMatch ? parseInt(pointMatch[1]) : 0;

      const couponMatches = rewardsLine.match(/(?:\d+x\s*[^\d,]+)/g);
      coupons = couponMatches ? couponMatches.map(c => c.trim()) : [];
    }

    if (email) {
      users.push({
        id: users.length + 1,
        fullName,
        contact,
        email,
        address,
        password,
        rewards: {
          points,
          coupons
        }
      });
    }
  }
});