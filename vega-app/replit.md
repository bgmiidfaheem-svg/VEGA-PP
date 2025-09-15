# Overview

Vega is a React Native streaming media application built for Android that allows users to stream and download ad-free content. The app features multiple content sources, multi-language support (Hindi, English, etc.), watchlist functionality, and external player integration. It's designed as a modern media consumption platform with a focus on user experience and performance.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React Native with TypeScript**: Core application framework providing cross-platform development capabilities
- **NativeWind**: Tailwind CSS for React Native styling, enabling rapid UI development with consistent design patterns
- **React Navigation v6**: Navigation stack including bottom tabs, native stack, and drawer navigation for structured app navigation
- **React Query (TanStack Query)**: Data fetching and caching layer with optimized retry logic, stale-while-revalidate patterns, and offline-first capabilities
- **Moti**: Animation library for smooth UI transitions and skeleton loading states
- **Expo modules**: Integration for various device APIs including brightness, document picker, and system UI controls

## State Management
- **Zustand**: Lightweight state management for:
  - Content provider selection and management
  - Watch history tracking with progress persistence
  - Watchlist functionality
  - Theme customization with multiple color schemes
  - Hero content display state
- **MMKV Storage**: High-performance key-value storage for settings and cache data
- **React Query**: Server state management with intelligent caching and background updates

## Video Player Architecture
- **React Native Video**: Primary video playback engine with support for:
  - HLS/DASH streaming protocols
  - External subtitle integration
  - Picture-in-picture mode
  - Notification controls
  - Background playback capabilities
- **Custom HLS Downloader**: Built-in M3U8 parser and segment downloader for offline content
- **Multiple Quality Support**: Dynamic quality selection from streaming sources

## Provider System
- **Dynamic Extension Loading**: Modular provider architecture allowing runtime addition of content sources
- **Provider Manager**: Centralized service for handling multiple streaming providers with:
  - Dynamic code execution in sandboxed environment
  - Fallback mechanisms for provider failures
  - Catalog management and content aggregation
- **Extension Manager**: GitHub-based provider distribution system with automatic updates

## Content Discovery & Search
- **Multi-Provider Search**: Simultaneous search across all enabled providers with result aggregation
- **OMDB Integration**: Enhanced metadata fetching for improved content information
- **Smart Caching**: Intelligent content caching with TTL-based invalidation
- **Search History**: Local storage of search queries with suggestions

## Download System
- **Dual Download Strategy**: 
  - Native React Native FS for direct file downloads
  - Custom HLS downloader for segmented content with progress tracking
- **Download Manager**: Queue-based system with:
  - Pause/resume functionality
  - Progress notifications
  - Automatic retry on failure
  - Storage permission handling

## Notification System
- **Notifee Integration**: Rich push notifications for:
  - Download progress and completion
  - Update notifications for app and providers
  - Background task notifications
- **Interactive Notifications**: Action buttons for download control and content management

# External Dependencies

## Core Services
- **Firebase (Optional)**: Analytics and crash reporting with conditional loading to support builds without Google services
- **React Native Firebase**: Crashlytics for error tracking and Analytics for usage insights

## Media & Storage
- **@dr.pogodin/react-native-fs**: File system operations for download management
- **react-native-mmkv**: High-performance storage for settings and cache
- **expo-video-thumbnails**: Thumbnail generation for downloaded content

## UI Components
- **@shopify/flash-list**: Performance-optimized list rendering for large content catalogs
- **@gorhom/bottom-sheet**: Smooth bottom sheet interactions for download options
- **react-native-element-dropdown**: Dropdown components for settings and filters
- **@expo/vector-icons**: Comprehensive icon library

## Development Tools
- **Expo**: Development platform and build system with prebuild workflow
- **EAS**: Expo Application Services for building and deployment
- **Metro**: JavaScript bundler with custom configuration for production optimization

## Content Processing
- **Axios**: HTTP client for API requests with custom headers and timeout handling
- **Cheerio**: Server-side HTML parsing for content extraction
- **expo-crypto**: Cryptographic functions for provider authentication

## Device Integration
- **expo-brightness**: Screen brightness control during video playback
- **expo-intent-launcher**: Android intent handling for external app integration
- **react-native-bootsplash**: Custom splash screen management
- **expo-system-ui**: System UI customization including status bar and navigation bar