function FindProxyForURL(url, host) {
      if (isInNet(host, "FE80::3268:93FF:FE7F:3D94", "64")) {
          return "DIRECT";
            }
     //         return "PROXY proxy.example.com:8080";
              }
