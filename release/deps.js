// This file was autogenerated by third_party/closure/deps/depswriter.py.
// Please do not edit.
goog.addDependency('../../../lib/abr/ewma.js', ['shaka.abr.Ewma'], ['goog.asserts']);
goog.addDependency('../../../lib/abr/ewma_bandwidth_estimator.js', ['shaka.abr.EwmaBandwidthEstimator'], ['shaka.abr.Ewma']);
goog.addDependency('../../../lib/abr/simple_abr_manager.js', ['shaka.abr.SimpleAbrManager'], ['goog.asserts', 'shaka.abr.EwmaBandwidthEstimator', 'shaka.log', 'shaka.util.Error', 'shaka.util.ManifestParserUtils', 'shaka.util.StreamUtils']);
goog.addDependency('../../../lib/cast/cast_proxy.js', ['shaka.cast.CastProxy'], ['goog.asserts', 'shaka.cast.CastSender', 'shaka.cast.CastUtils', 'shaka.log', 'shaka.util.Error', 'shaka.util.EventManager', 'shaka.util.FakeEvent', 'shaka.util.FakeEventTarget', 'shaka.util.IDestroyable']);
goog.addDependency('../../../lib/cast/cast_receiver.js', ['shaka.cast.CastReceiver'], ['goog.asserts', 'shaka.cast.CastUtils', 'shaka.log', 'shaka.util.Error', 'shaka.util.FakeEvent', 'shaka.util.FakeEventTarget', 'shaka.util.IDestroyable']);
goog.addDependency('../../../lib/cast/cast_sender.js', ['shaka.cast.CastSender'], ['goog.asserts', 'shaka.cast.CastUtils', 'shaka.log', 'shaka.util.Error', 'shaka.util.FakeEvent', 'shaka.util.IDestroyable', 'shaka.util.PublicPromise']);
goog.addDependency('../../../lib/cast/cast_utils.js', ['shaka.cast.CastUtils'], ['shaka.util.FakeEvent']);
goog.addDependency('../../../lib/dash/content_protection.js', ['shaka.dash.ContentProtection'], ['goog.asserts', 'shaka.log', 'shaka.util.Error', 'shaka.util.Functional', 'shaka.util.ManifestParserUtils', 'shaka.util.MapUtils', 'shaka.util.Uint8ArrayUtils', 'shaka.util.XmlUtils']);
goog.addDependency('../../../lib/dash/dash_parser.js', ['shaka.dash.DashParser'], ['goog.asserts', 'shaka.dash.ContentProtection', 'shaka.dash.SegmentBase', 'shaka.dash.SegmentList', 'shaka.dash.SegmentTemplate', 'shaka.log', 'shaka.media.DrmEngine', 'shaka.media.ManifestParser', 'shaka.media.PresentationTimeline', 'shaka.media.SegmentReference', 'shaka.media.TextEngine', 'shaka.net.NetworkingEngine', 'shaka.util.Error', 'shaka.util.Functional', 'shaka.util.LanguageUtils', 'shaka.util.ManifestParserUtils', 'shaka.util.StreamUtils', 'shaka.util.StringUtils', 'shaka.util.XmlUtils']);
goog.addDependency('../../../lib/dash/mpd_utils.js', ['shaka.dash.MpdUtils'], ['goog.asserts', 'shaka.log', 'shaka.util.Functional', 'shaka.util.ManifestParserUtils', 'shaka.util.XmlUtils']);
goog.addDependency('../../../lib/dash/segment_base.js', ['shaka.dash.SegmentBase'], ['goog.asserts', 'shaka.dash.MpdUtils', 'shaka.log', 'shaka.media.InitSegmentReference', 'shaka.media.Mp4SegmentIndexParser', 'shaka.media.SegmentIndex', 'shaka.media.WebmSegmentIndexParser', 'shaka.util.Error', 'shaka.util.ManifestParserUtils', 'shaka.util.XmlUtils']);
goog.addDependency('../../../lib/dash/segment_list.js', ['shaka.dash.SegmentList'], ['goog.asserts', 'shaka.dash.MpdUtils', 'shaka.dash.SegmentBase', 'shaka.log', 'shaka.media.SegmentIndex', 'shaka.media.SegmentReference', 'shaka.util.Error', 'shaka.util.Functional', 'shaka.util.ManifestParserUtils', 'shaka.util.XmlUtils']);
goog.addDependency('../../../lib/dash/segment_template.js', ['shaka.dash.SegmentTemplate'], ['goog.asserts', 'shaka.dash.MpdUtils', 'shaka.dash.SegmentBase', 'shaka.log', 'shaka.media.InitSegmentReference', 'shaka.media.SegmentIndex', 'shaka.media.SegmentReference', 'shaka.util.Error', 'shaka.util.ManifestParserUtils']);
goog.addDependency('../../../lib/debug/asserts.js', ['goog.asserts'], []);
goog.addDependency('../../../lib/debug/log.js', ['shaka.log'], []);
goog.addDependency('../../../lib/hls/hls_classes.js', ['shaka.hls.Attribute', 'shaka.hls.Playlist', 'shaka.hls.PlaylistType', 'shaka.hls.Segment', 'shaka.hls.Tag'], ['goog.asserts']);
goog.addDependency('../../../lib/hls/hls_parser.js', ['shaka.hls.HlsParser'], ['goog.asserts', 'shaka.hls.ManifestTextParser', 'shaka.hls.Playlist', 'shaka.hls.PlaylistType', 'shaka.hls.Tag', 'shaka.hls.Utils', 'shaka.log', 'shaka.media.DrmEngine', 'shaka.media.InitSegmentReference', 'shaka.media.ManifestParser', 'shaka.media.PresentationTimeline', 'shaka.media.SegmentIndex', 'shaka.media.SegmentReference', 'shaka.net.DataUriPlugin', 'shaka.net.NetworkingEngine', 'shaka.util.Error', 'shaka.util.Functional', 'shaka.util.ManifestParserUtils']);
goog.addDependency('../../../lib/hls/hls_utils.js', ['shaka.hls.Utils'], ['shaka.util.ManifestParserUtils']);
goog.addDependency('../../../lib/hls/manifest_text_parser.js', ['shaka.hls.ManifestTextParser'], ['shaka.hls.Attribute', 'shaka.hls.Playlist', 'shaka.hls.PlaylistType', 'shaka.hls.Segment', 'shaka.hls.Tag', 'shaka.hls.Utils', 'shaka.util.Error', 'shaka.util.StringUtils', 'shaka.util.TextParser']);
goog.addDependency('../../../lib/media/drm_engine.js', ['shaka.media.DrmEngine'], ['goog.asserts', 'shaka.log', 'shaka.net.NetworkingEngine', 'shaka.util.ArrayUtils', 'shaka.util.Error', 'shaka.util.EventManager', 'shaka.util.Functional', 'shaka.util.IDestroyable', 'shaka.util.ManifestParserUtils', 'shaka.util.MapUtils', 'shaka.util.PublicPromise', 'shaka.util.StringUtils', 'shaka.util.Timer', 'shaka.util.Uint8ArrayUtils']);
goog.addDependency('../../../lib/media/manifest_parser.js', ['shaka.media.ManifestParser'], ['goog.Uri', 'goog.asserts', 'shaka.log', 'shaka.net.NetworkingEngine', 'shaka.util.Error']);
goog.addDependency('../../../lib/media/media_source_engine.js', ['shaka.media.MediaSourceEngine'], ['goog.asserts', 'shaka.log', 'shaka.media.TextEngine', 'shaka.media.TimeRangesUtils', 'shaka.util.Error', 'shaka.util.EventManager', 'shaka.util.Functional', 'shaka.util.IDestroyable', 'shaka.util.ManifestParserUtils', 'shaka.util.PublicPromise']);
goog.addDependency('../../../lib/media/mp4_segment_index_parser.js', ['shaka.media.Mp4SegmentIndexParser'], ['goog.asserts', 'shaka.log', 'shaka.media.SegmentReference', 'shaka.util.Error', 'shaka.util.Mp4Parser']);
goog.addDependency('../../../lib/media/mp4_ttml_parser.js', ['shaka.media.Mp4TtmlParser'], ['shaka.media.TextEngine', 'shaka.media.TtmlTextParser', 'shaka.util.Error', 'shaka.util.Mp4Parser']);
goog.addDependency('../../../lib/media/mp4_vtt_parser.js', ['shaka.media.Mp4VttParser'], ['goog.asserts', 'shaka.log', 'shaka.media.TextEngine', 'shaka.media.VttTextParser', 'shaka.util.DataViewReader', 'shaka.util.Error', 'shaka.util.Mp4Parser', 'shaka.util.StringUtils', 'shaka.util.TextParser']);
goog.addDependency('../../../lib/media/playhead.js', ['shaka.media.Playhead'], ['goog.asserts', 'shaka.log', 'shaka.media.TimeRangesUtils', 'shaka.util.EventManager', 'shaka.util.FakeEvent', 'shaka.util.IDestroyable', 'shaka.util.StreamUtils']);
goog.addDependency('../../../lib/media/playhead_observer.js', ['shaka.media.PlayheadObserver'], ['goog.asserts', 'shaka.media.TimeRangesUtils', 'shaka.util.ConfigUtils', 'shaka.util.EventManager', 'shaka.util.FakeEvent', 'shaka.util.IDestroyable', 'shaka.util.StreamUtils']);
goog.addDependency('../../../lib/media/presentation_timeline.js', ['shaka.media.PresentationTimeline'], ['goog.asserts', 'shaka.log', 'shaka.media.SegmentReference']);
goog.addDependency('../../../lib/media/segment_index.js', ['shaka.media.SegmentIndex'], ['goog.asserts', 'shaka.log', 'shaka.media.SegmentReference', 'shaka.util.IDestroyable', 'shaka.util.ManifestParserUtils']);
goog.addDependency('../../../lib/media/segment_reference.js', ['shaka.media.InitSegmentReference', 'shaka.media.SegmentReference'], ['goog.asserts']);
goog.addDependency('../../../lib/media/streaming_engine.js', ['shaka.media.StreamingEngine'], ['goog.asserts', 'shaka.log', 'shaka.media.MediaSourceEngine', 'shaka.media.Playhead', 'shaka.net.NetworkingEngine', 'shaka.util.Error', 'shaka.util.FakeEvent', 'shaka.util.Functional', 'shaka.util.IDestroyable', 'shaka.util.ManifestParserUtils', 'shaka.util.MapUtils', 'shaka.util.Mp4Parser', 'shaka.util.PublicPromise', 'shaka.util.StreamUtils']);
goog.addDependency('../../../lib/media/text_engine.js', ['shaka.media.TextEngine'], ['goog.asserts', 'shaka.log', 'shaka.util.IDestroyable']);
goog.addDependency('../../../lib/media/time_ranges_utils.js', ['shaka.media.TimeRangesUtils'], []);
goog.addDependency('../../../lib/media/ttml_text_parser.js', ['shaka.media.TtmlTextParser'], ['goog.asserts', 'shaka.media.TextEngine', 'shaka.util.Error', 'shaka.util.StringUtils']);
goog.addDependency('../../../lib/media/vtt_text_parser.js', ['shaka.media.VttTextParser'], ['goog.asserts', 'shaka.log', 'shaka.media.TextEngine', 'shaka.util.Error', 'shaka.util.StringUtils', 'shaka.util.TextParser']);
goog.addDependency('../../../lib/media/webm_segment_index_parser.js', ['shaka.media.WebmSegmentIndexParser'], ['goog.asserts', 'shaka.log', 'shaka.media.SegmentReference', 'shaka.util.EbmlElement', 'shaka.util.EbmlParser', 'shaka.util.Error']);
goog.addDependency('../../../lib/net/data_uri_plugin.js', ['shaka.net.DataUriPlugin'], ['shaka.log', 'shaka.net.NetworkingEngine', 'shaka.util.Error', 'shaka.util.StringUtils', 'shaka.util.Uint8ArrayUtils']);
goog.addDependency('../../../lib/net/http_plugin.js', ['shaka.net.HttpPlugin'], ['goog.asserts', 'shaka.log', 'shaka.net.NetworkingEngine', 'shaka.util.Error', 'shaka.util.HolaApi', 'shaka.util.StringUtils']);
goog.addDependency('../../../lib/net/networking_engine.js', ['shaka.net.NetworkingEngine'], ['goog.Uri', 'goog.asserts', 'shaka.util.ConfigUtils', 'shaka.util.Error', 'shaka.util.Functional', 'shaka.util.IDestroyable', 'shaka.util.PublicPromise']);
goog.addDependency('../../../lib/offline/db_engine.js', ['shaka.offline.DBEngine'], ['goog.asserts', 'shaka.log', 'shaka.offline.IStorageEngine', 'shaka.util.Error', 'shaka.util.Functional', 'shaka.util.PublicPromise']);
goog.addDependency('../../../lib/offline/download_manager.js', ['shaka.offline.DownloadManager'], ['goog.asserts', 'shaka.net.NetworkingEngine', 'shaka.offline.OfflineUtils', 'shaka.util.Error', 'shaka.util.IDestroyable', 'shaka.util.MapUtils']);
goog.addDependency('../../../lib/offline/i_storage_engine.js', ['shaka.offline.IStorageEngine'], ['shaka.util.IDestroyable']);
goog.addDependency('../../../lib/offline/offline_manifest_parser.js', ['shaka.offline.OfflineManifestParser'], ['goog.asserts', 'shaka.log', 'shaka.media.ManifestParser', 'shaka.media.PresentationTimeline', 'shaka.offline.OfflineUtils', 'shaka.util.Error']);
goog.addDependency('../../../lib/offline/offline_scheme.js', ['shaka.offline.OfflineScheme'], ['shaka.net.NetworkingEngine', 'shaka.offline.OfflineUtils', 'shaka.util.Error']);
goog.addDependency('../../../lib/offline/offline_utils.js', ['shaka.offline.OfflineUtils'], ['goog.asserts', 'shaka.media.InitSegmentReference', 'shaka.media.PresentationTimeline', 'shaka.media.SegmentIndex', 'shaka.media.SegmentReference', 'shaka.offline.DBEngine', 'shaka.offline.IStorageEngine', 'shaka.util.ManifestParserUtils', 'shaka.util.StreamUtils']);
goog.addDependency('../../../lib/offline/storage.js', ['shaka.offline.Storage'], ['goog.asserts', 'shaka.Player', 'shaka.log', 'shaka.media.DrmEngine', 'shaka.media.ManifestParser', 'shaka.offline.DownloadManager', 'shaka.offline.IStorageEngine', 'shaka.offline.OfflineManifestParser', 'shaka.offline.OfflineUtils', 'shaka.util.ConfigUtils', 'shaka.util.Error', 'shaka.util.Functional', 'shaka.util.IDestroyable', 'shaka.util.LanguageUtils', 'shaka.util.ManifestParserUtils', 'shaka.util.StreamUtils']);
goog.addDependency('../../../lib/player.js', ['shaka.Player'], ['goog.asserts', 'shaka.abr.EwmaBandwidthEstimator', 'shaka.abr.SimpleAbrManager', 'shaka.log', 'shaka.media.DrmEngine', 'shaka.media.ManifestParser', 'shaka.media.MediaSourceEngine', 'shaka.media.Playhead', 'shaka.media.PlayheadObserver', 'shaka.media.SegmentReference', 'shaka.media.StreamingEngine', 'shaka.net.NetworkingEngine', 'shaka.util.CancelableChain', 'shaka.util.ConfigUtils', 'shaka.util.Error', 'shaka.util.EventManager', 'shaka.util.FakeEvent', 'shaka.util.FakeEventTarget', 'shaka.util.Functional', 'shaka.util.HolaApi', 'shaka.util.IDestroyable', 'shaka.util.ManifestParserUtils', 'shaka.util.MapUtils', 'shaka.util.PublicPromise', 'shaka.util.StreamUtils']);
goog.addDependency('../../../lib/polyfill/all.js', ['shaka.polyfill.installAll', 'shaka.polyfill.register'], []);
goog.addDependency('../../../lib/polyfill/fullscreen.js', ['shaka.polyfill.Fullscreen'], ['shaka.polyfill.register']);
goog.addDependency('../../../lib/polyfill/indexed_db.js', ['shaka.polyfill.IndexedDB'], ['goog.asserts', 'shaka.log', 'shaka.polyfill.register']);
goog.addDependency('../../../lib/polyfill/mediakeys.js', ['shaka.polyfill.MediaKeys'], ['shaka.log', 'shaka.polyfill.PatchedMediaKeysMs', 'shaka.polyfill.PatchedMediaKeysNop', 'shaka.polyfill.PatchedMediaKeysWebkit', 'shaka.polyfill.register']);
goog.addDependency('../../../lib/polyfill/mediasource.js', ['shaka.polyfill.MediaSource'], ['shaka.log', 'shaka.polyfill.register']);
goog.addDependency('../../../lib/polyfill/patchedmediakeys_ms.js', ['shaka.polyfill.PatchedMediaKeysMs'], ['goog.asserts', 'shaka.log', 'shaka.util.ArrayUtils', 'shaka.util.EventManager', 'shaka.util.FakeEvent', 'shaka.util.FakeEventTarget', 'shaka.util.Pssh', 'shaka.util.PublicPromise', 'shaka.util.Uint8ArrayUtils']);
goog.addDependency('../../../lib/polyfill/patchedmediakeys_nop.js', ['shaka.polyfill.PatchedMediaKeysNop'], ['goog.asserts', 'shaka.log']);
goog.addDependency('../../../lib/polyfill/patchedmediakeys_webkit.js', ['shaka.polyfill.PatchedMediaKeysWebkit'], ['goog.asserts', 'shaka.log', 'shaka.util.EventManager', 'shaka.util.FakeEvent', 'shaka.util.FakeEventTarget', 'shaka.util.PublicPromise', 'shaka.util.StringUtils', 'shaka.util.Uint8ArrayUtils']);
goog.addDependency('../../../lib/polyfill/promise.js', ['shaka.polyfill.Promise'], ['goog.asserts', 'shaka.log', 'shaka.polyfill.register']);
goog.addDependency('../../../lib/polyfill/videoplaybackquality.js', ['shaka.polyfill.VideoPlaybackQuality'], ['shaka.polyfill.register']);
goog.addDependency('../../../lib/polyfill/vttcue.js', ['shaka.polyfill.VTTCue'], ['shaka.log', 'shaka.polyfill.register']);
goog.addDependency('../../../lib/util/array_utils.js', ['shaka.util.ArrayUtils'], []);
goog.addDependency('../../../lib/util/cancelable_chain.js', ['shaka.util.CancelableChain'], ['goog.asserts', 'shaka.util.Error']);
goog.addDependency('../../../lib/util/config_utils.js', ['shaka.util.ConfigUtils'], ['goog.asserts', 'shaka.log']);
goog.addDependency('../../../lib/util/data_view_reader.js', ['shaka.util.DataViewReader'], ['goog.asserts', 'shaka.util.Error', 'shaka.util.StringUtils']);
goog.addDependency('../../../lib/util/ebml_parser.js', ['shaka.util.EbmlElement', 'shaka.util.EbmlParser'], ['shaka.util.DataViewReader', 'shaka.util.Error', 'shaka.util.Uint8ArrayUtils']);
goog.addDependency('../../../lib/util/error.js', ['shaka.util.Error'], []);
goog.addDependency('../../../lib/util/event_manager.js', ['shaka.util.EventManager'], ['goog.asserts', 'shaka.util.IDestroyable', 'shaka.util.MultiMap']);
goog.addDependency('../../../lib/util/fake_event.js', ['shaka.util.FakeEvent'], []);
goog.addDependency('../../../lib/util/fake_event_target.js', ['shaka.util.FakeEventTarget'], ['goog.asserts', 'shaka.log', 'shaka.util.FakeEvent', 'shaka.util.MultiMap']);
goog.addDependency('../../../lib/util/functional.js', ['shaka.util.Functional'], []);
goog.addDependency('../../../lib/util/hola_api.js', ['shaka.util.HolaApi'], []);
goog.addDependency('../../../lib/util/i_destroyable.js', ['shaka.util.IDestroyable'], []);
goog.addDependency('../../../lib/util/language_utils.js', ['shaka.util.LanguageUtils'], ['goog.asserts']);
goog.addDependency('../../../lib/util/manifest_parser_utils.js', ['shaka.util.ManifestParserUtils'], ['goog.Uri', 'shaka.util.Functional']);
goog.addDependency('../../../lib/util/map_utils.js', ['shaka.util.MapUtils'], []);
goog.addDependency('../../../lib/util/mp4_parser.js', ['shaka.util.Mp4Parser'], ['goog.asserts', 'shaka.util.DataViewReader']);
goog.addDependency('../../../lib/util/multi_map.js', ['shaka.util.MultiMap'], []);
goog.addDependency('../../../lib/util/pssh.js', ['shaka.util.Pssh'], ['goog.asserts', 'shaka.log', 'shaka.util.Mp4Parser', 'shaka.util.Uint8ArrayUtils']);
goog.addDependency('../../../lib/util/public_promise.js', ['shaka.util.PublicPromise'], []);
goog.addDependency('../../../lib/util/stream_utils.js', ['shaka.util.StreamUtils'], ['goog.asserts', 'shaka.log', 'shaka.media.DrmEngine', 'shaka.media.MediaSourceEngine', 'shaka.media.TextEngine', 'shaka.util.LanguageUtils', 'shaka.util.ManifestParserUtils']);
goog.addDependency('../../../lib/util/string_utils.js', ['shaka.util.StringUtils'], ['shaka.log', 'shaka.util.Error']);
goog.addDependency('../../../lib/util/text_parser.js', ['shaka.util.TextParser'], ['goog.asserts']);
goog.addDependency('../../../lib/util/timer.js', ['shaka.util.Timer'], []);
goog.addDependency('../../../lib/util/uint8array_utils.js', ['shaka.util.Uint8ArrayUtils'], []);
goog.addDependency('../../../lib/util/xml_utils.js', ['shaka.util.XmlUtils'], ['goog.asserts', 'shaka.log']);
goog.addDependency('../../../third_party/closure/goog/base.js', ['goog'], []);
goog.addDependency('../../../third_party/closure/goog/uri/uri.js', ['goog.Uri', 'goog.Uri.QueryData'], ['goog.uri.utils', 'goog.uri.utils.ComponentIndex']);
goog.addDependency('../../../third_party/closure/goog/uri/utils.js', ['goog.uri.utils', 'goog.uri.utils.ComponentIndex'], []);
