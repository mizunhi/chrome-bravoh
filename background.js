// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  var sound = chrome.extension.getURL("/applause.wav");
  var audio = new Audio(sound);
  audio.currentTime = 0;
  audio.play();
});
