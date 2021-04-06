package handlers_test

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/odpf/cookies/go-app/api/handlers"
	"github.com/stretchr/testify/assert"
)

func TestPing(t *testing.T) {
	r, err := http.NewRequest(http.MethodGet, "/ping", nil)
	if err != nil {
		t.Fatal(err)
	}
	w := httptest.NewRecorder()
	handler := http.HandlerFunc(handlers.Ping())

	expectedStatusCode := http.StatusOK
	expectedStringBody := "\"pong\"\n"

	handler.ServeHTTP(w, r)

	assert.Equal(t, expectedStatusCode, w.Code)
	assert.Equal(t, expectedStringBody, w.Body.String())
}
