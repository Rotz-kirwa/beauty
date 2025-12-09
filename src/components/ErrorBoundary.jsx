import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, info: null }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    this.setState({ error, info })
    // Log to console and call optional handler
    // Apps can replace this with a call to an error tracking service
    // (Sentry, LogRocket, etc.) if desired.
    // Keep logging minimal so this file is reusable.
    // eslint-disable-next-line no-console
    console.error('Uncaught error captured by ErrorBoundary:', error, info)
    if (typeof this.props.onError === 'function') {
      try {
        this.props.onError({ error, info })
      } catch (e) {
        // swallow errors from handler
      }
    }
  }

  reset = () => {
    this.setState({ hasError: false, error: null, info: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }} role="alert">
          <h2>Something went wrong.</h2>
          <p>We're sorry — the app encountered an unexpected error.</p>
          <div style={{ marginTop: 12 }}>
            <button onClick={this.reset}>Try again</button>
            <button onClick={() => window.location.reload()} style={{ marginLeft: 8 }}>
              Reload page
            </button>
          </div>
          <details style={{ whiteSpace: 'pre-wrap', marginTop: 12 }}>
            {this.state.error && String(this.state.error)}
            {this.state.info && this.state.info.componentStack}
          </details>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
