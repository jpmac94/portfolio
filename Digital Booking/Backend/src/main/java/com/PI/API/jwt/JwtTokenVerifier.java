package com.PI.API.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import static com.fasterxml.jackson.databind.type.LogicalType.Map;
import static io.jsonwebtoken.Jwts.parser;

public class JwtTokenVerifier extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        String authorizationHeader=request.getHeader("Authorization");

        if ( authorizationHeader==null || !authorizationHeader.startsWith("Bearer ")){
            filterChain.doFilter(request,response);
            return;
        }
        String secretKey="F2fnbdZk5xhL2jk5JhhUGqqJJ8nSr8L2jk5JJJ8nSr";
        String token=authorizationHeader.replace("Bearer ","");
        try{
           Jws<Claims> claims= Jwts.parser()
                    .setSigningKey(Keys.hmacShaKeyFor(secretKey.getBytes()))
                    .parseClaimsJws(token);

           Claims body=claims.getBody();
           String username=body.getSubject();

           var authorities= (List< java.util.Map<String,String> >) body.get("authorities");

          Set<SimpleGrantedAuthority> grantedAuthorities= authorities.stream()
                   .map(item -> new SimpleGrantedAuthority(item.get("authority")))
                   .collect(Collectors.toSet());
            Authentication authentication=new UsernamePasswordAuthenticationToken(
                    username,
                    null,
                    grantedAuthorities
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);
        }catch(JwtException e){
            throw new IllegalStateException(String.format("token %s cannot be trusted",token));
        }

        filterChain.doFilter(request,response);
    }
}
