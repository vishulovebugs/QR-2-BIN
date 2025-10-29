import React, { useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

export default function QrScanner({ onScan, onError }) {
  const scannerRef = useRef(null);
  const html5QrCodeRef = useRef(null);

  useEffect(() => {
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    
    html5QrCodeRef.current = new Html5Qrcode("qr-reader");

    const qrCodeSuccessCallback = (decodedText) => {
      onScan(decodedText);
      // Stop scanning after successful scan
      html5QrCodeRef.current?.stop().catch(err => console.error("Stop error:", err));
    };

    const qrCodeErrorCallback = (errorMessage) => {
      // Ignore common scanning errors (we only care about actual failures)
      if (!errorMessage.includes('NotFoundException')) {
        console.warn('QR scan error:', errorMessage);
      }
    };

    html5QrCodeRef.current
      .start(
        { facingMode: "environment" }, // Use back camera
        config,
        qrCodeSuccessCallback,
        qrCodeErrorCallback
      )
      .catch((err) => {
        console.error("Camera start error:", err);
        onError?.(err);
      });

    return () => {
      if (html5QrCodeRef.current?.isScanning) {
        html5QrCodeRef.current
          .stop()
          .catch((err) => console.error("Cleanup stop error:", err));
      }
    };
  }, [onScan, onError]);

  return (
    <div className="qr-scanner-container">
      <div id="qr-reader" ref={scannerRef} />
      <div className="scanner-overlay">
        <div className="scanner-frame">
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>
        </div>
        <p className="scanner-hint">Position QR code within the frame</p>
      </div>
    </div>
  );
}
